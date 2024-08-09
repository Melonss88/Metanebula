import StarRating from "@/pages/nftDetail/components/StarRating";
import { useNftDetail } from "@/pages/nftDetail/hooks/useNftDetail";
import { accountFormat } from "@/utils/web3utils";
import { nftItemType } from "@/pages/nft/section/type";
import { useSearchParams } from "react-router-dom";
import DetailBack from "@/pages/nft/components/DetailBack";
import ETHSvg from "@/assets/svg/ETHSvg";
import { useState } from "react";
import PopDetail from "@/pages/nftDetail/pop/PopDetail";
import PopDetails from "@/pages/assetsDetail/pop/PopDetails";

const DetailList = ({ back }: { back: string }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [isConfirm, setIsConfirm] = useState(false);

  const { records, isLoading, isError } = id
    ? useNftDetail(id)
    : {
        records: null as nftItemType | null,
        isLoading: false,
        isError: false
      };

  return (
    <>
      <div className="cont-left">
        <span className="avatar-box">
          <img src={records?.imageURL} alt="avatar.png" />
        </span>
      </div>
      <div className="cont-right">
        <DetailBack linkTo={"/" + back} />
        <div className="text-[4rem] font-[ftnB] mb-[25px]">
          {records?.name} #{id}
        </div>

        <ul className="infos">
          <li className="item">
            <div className="label">Gender</div>
            <div className="num">{records?.gender}</div>
          </li>
          <li className="item">
            <div className="label">Color</div>
            <div className="num">{records?.color}</div>
          </li>
          <li className="item">
            <div className="label">Accessories</div>
            <div className="num">{records?.accessories}</div>
          </li>
          <li className="item">
            <div className="label">Rarity</div>
            <div className="num text-[#5e5e5e] text-[16px]">
              <StarRating rarity={records?.rarity} />
            </div>
          </li>
          <li className="item">
            <div className="label">Owner</div>
            <div className="num">{accountFormat(records?.to)}</div>
          </li>
        </ul>

        <div className="btn-click flex mt-[7rem] font-[ftnB]">
          <div className="text-[32px] flex items-center">
            <ETHSvg />
            <span className="ml-[14px]">{records?.price}</span>
          </div>

          <button
            className="btn-theme-blue ml-[50px] text-[20px] h-[4rem] min-w-[115px]"
            onClick={() => setIsConfirm(true)}
          >
            {back == "nft" && "Buy"}
            {back == "assets" && "Transfer"}
          </button>
        </div>
      </div>

      {isConfirm && (
        <PopDetails
          onClose={() => setIsConfirm(false)}
          data={records}
          type={back}
        />
      )}
    </>
  );
};
export default DetailList;
