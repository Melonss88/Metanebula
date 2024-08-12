import { accountFormat } from "@/utils/web3utils";
import { useTransferRecords } from "@/pages/assets/hooks/useTransferRecords";
import { formatTimestamp } from "@/utils/formatDate";

const SaleHistory = () => {
  const { records } = useTransferRecords();
  const list = records;

  return (
    <div className="Details-SALEHISTORY">
      <div className="item-cont item-title">
        <div className="titl">TokenID</div>
        <div className="titl">From</div>
        <div className="titl">To</div>
        <div className="titl">Date</div>
      </div>
      {list.map(
        (item, index) =>
          Number(item.price) == 0 && (
            <div className="item-cont" key={index}>
              <div className="titl">{item.tokenId}</div>
              <div className="titl">{accountFormat(item.from)}</div>
              <div className="titl">{accountFormat(item.to)}</div>
              <div className="titl">{formatTimestamp(item.timestamp)}</div>
            </div>
          )
      )}
    </div>
  );
};

export default SaleHistory;
