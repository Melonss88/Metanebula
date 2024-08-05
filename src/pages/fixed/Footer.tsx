import logo from "./images/logo.jpg";
import { observer } from "mobx-react";

const logoPart = {
  string: "2024 | Graduation Project of Melon",
  img: logo
};

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col mt-[80px] mb-[80px]">
        <img src={logoPart.img} className=" w-[100px] mb-[2.4rem]"></img>
        <p className="text-[16px] text-[#808080]  text-center  mb-[43px]">
          {logoPart.string}
        </p>
      </div>
    </div>
  );
};

export default observer(Footer);
