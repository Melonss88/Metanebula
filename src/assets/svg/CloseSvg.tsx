import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";

const CloseSvg = () => {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      width={mobileStore.isMobile ? 12 : 28}
      height={mobileStore.isMobile ? 12 : 28}
      xmlns="http://www.w3.org/2000/svg"
      className="pop-close"
    >
      <path
        d="M13 1 1 13M1 1l12 12"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default observer(CloseSvg);
