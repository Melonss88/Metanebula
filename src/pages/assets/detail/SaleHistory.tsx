import { accountFormat } from "@/utils/web3utils";
import { useTransferRecords } from "../hooks/useTransferRecords";
import { formatTimestamp } from "@/utils/formatDate";

const SaleHistory = () => {
  const { records } = useTransferRecords();
  const list = records;

  return (
    <div className="Details-SALEHISTORY">
      <div className="item-cont item-title">
        <div className="titl">Date</div>
        <div className="titl">From</div>
        <div className="titl">To</div>
      </div>
      {list.map((item, index) => (
        <div className="item-cont" key={index}>
          <div className="titl">{formatTimestamp(item.timestamp)}</div>
          <div className="titl">{accountFormat(item.from)}</div>
          <div className="titl">{accountFormat(item.to)}</div>
        </div>
      ))}
    </div>
  );
};

export default SaleHistory;
