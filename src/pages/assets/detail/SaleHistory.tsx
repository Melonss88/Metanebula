import ETHSvg from "@/assets/svg/ETHSvg";
const SaleHistory = () => {
  return (
    <div className="Details-SALEHISTORY">
      <div className="item-cont item-title">
        <div className="titl">Buyer</div>
        <div className="titl">Seller</div>
        <div className="titl">
          <span className="mr-[5px] small:mr-[2px]">Price</span>
          <ETHSvg />
        </div>
        <div className="titl"></div>
      </div>
      <div className="item-cont">
        <div className="titl">no data</div>
        <div className="titl">no data</div>
        <div className="titl">no data</div>
        <div className="titl">no data</div>
      </div>
    </div>
  );
};

export default SaleHistory;
