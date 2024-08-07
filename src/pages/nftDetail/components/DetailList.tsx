import StarRating from "@/pages/nftDetail/components/StarRating";
import { useNftDetail } from "@/pages/nftDetail/hooks/useNftDetail";
import { accountFormat } from "@/utils/web3utils";
import { EthxCatItemType } from "@/pages/nft/section/type";
import { useSearchParams } from "react-router-dom";

const DetailList = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { records, isLoading, isError } = id
    ? useNftDetail(id)
    : {
        records: null as EthxCatItemType | null,
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
        <div className="tit">#{id}</div>
        <ul className="infos">
          <li className="item">
            <div className="label">Name:</div>
            <div className="num">{records?.name}</div>
          </li>
          <li className="item">
            <div className="label">Price:</div>
            <div className="num">{records?.price}</div>
          </li>
          <li className="item">
            <div className="label">Owner:</div>
            <div className="num">{accountFormat(records?.to)}</div>
          </li>
          <li className="item">
            <div className="label">Gender:</div>
            <div className="num">{records?.gender}</div>
          </li>
          <li className="item">
            <div className="label">Color:</div>
            <div className="num">{records?.color}</div>
          </li>
          <li className="item">
            <div className="label">Accessories:</div>
            <div className="num">{records?.accessories}</div>
          </li>
          <li className="item">
            <div className="label">Rarity:</div>
            <div className="num">
              <StarRating rarity={records?.rarity} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default DetailList;
