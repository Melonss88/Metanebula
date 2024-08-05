import "@/assets/commonCss/common.pop.scss";
import CloseSvg from "@/assets/svg/CloseSvg";
import avatar from "../../img/avatar.jpg";
const PopSell = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="pop-container">
      <div className="pop-inner px-[10rem] small:px-[32px]">
        <span onClick={onClose}>
          <CloseSvg></CloseSvg>
        </span>
        <p className="pop-title">Buy</p>
        <div className="text-center">
          <span className="inline-block rounded-[6px] overflow-hidden mt-[5px]">
            <img
              className="h-[216px] w-[216px] small:w-[10rem] small:h-[10rem]"
              src={avatar}
              alt="avatar.png"
            />
          </span>
          <p className="mb-[15px]">
            <span className="text-[#868686]">#49029 </span>
            <span>Incubator</span>
          </p>
        </div>
        <input
          className="pop-input mb-[15px]"
          type="text"
          placeholder="Selling price(BNB)"
        />
        <button className="pop-btn-confirm btn-theme-yellow">
          Confirm Buy
        </button>
        <p className="mt-[20px] text-[2rem] font-[BroR] small:text-[10px]">
          After the tramsaction is successful, a 4.5% handing fee will be
          charged
        </p>
      </div>
    </div>
  );
};

export default PopSell;
