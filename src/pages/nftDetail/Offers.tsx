import ETHSvg from "@/assets/svg/ETHSvg";
import { useTransferRecords } from "@/pages/assets/hooks/useTransferRecords";
import { accountFormat } from "@/utils/web3utils";
import { formatTimestampSimple } from "@/utils/formatDate";

const Offers = () => {
  const { records } = useTransferRecords();
  const list = records;

  return (
    <div className="Details-SALEHISTORY">
      <div className="item-cont item-title">
        <div className="titl">TokenID</div>
        <div className="titl">Buyer</div>
        <div className="titl">Seller</div>
        <div className="titl">
          <span className="mr-[5px] small:mr-[2px]">Price</span>
          <ETHSvg />
        </div>
        <div className="titl">Date</div>
        <div className="titl">Status</div>
      </div>
      {list.map(
        (item, index) =>
          Number(item.price) > 0 && (
            <div className="item-cont" key={index}>
              <div className="titl">{item.tokenId}</div>
              <div className="titl">{accountFormat(item.to)}</div>
              <div className="titl">{accountFormat(item.from)}</div>
              <div className="titl font-[ftnB]">{item.price}</div>
              <div className="titl">
                {formatTimestampSimple(item.timestamp)}
              </div>
              <div className="titl text-[#07db95]">Success</div>
            </div>
          )
      )}
    </div>
  );
};

export default Offers;
