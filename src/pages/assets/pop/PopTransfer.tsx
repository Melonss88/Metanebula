import "@/assets/commonCss/common.pop.scss";
import CloseSvg from "@/assets/svg/CloseSvg";
import { ChangeEvent, useEffect, useState } from "react";
import DUCK from "@/config/abi/DUCK.json";
import { notification } from "antd";
import { useWriteContract } from "wagmi";

const PopSell = ({
  id,
  onClose
}: {
  id: string | null;
  onClose: () => void;
}) => {
  const [address, setAddress] = useState("");
  const [remind, setRemind] = useState("");
  const {
    data: mintData,
    isSuccess,
    isError: mintError,
    failureReason,
    writeContract
  } = useWriteContract();

  const transfer = () => {
    if (!address) return setRemind("The address can not be empty");

    try {
      console.log("address:", address);
      writeContract({
        address: "0x05Aa229Aec102f78CE0E852A812a388F076Aa555",
        abi: DUCK,
        functionName: "testTransfer",
        args: [id, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]
        //0x1a986Eb3a891fc39743aF482e24687B708eA2425
        //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
      });
    } catch {
      notification.error({
        placement: "top",
        message: "user rejected!"
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        placement: "top",
        message: "mint success!"
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (mintError) {
      console.log(mintError, "mintError");
      notification.error({
        placement: "top",
        message: "mint Error!"
      });
    }
  }, [mintError]);

  useEffect(() => {
    if (failureReason) {
      console.log(failureReason, "failureReason");
    }
  }, [failureReason]);

  return (
    <div className="pop-container">
      <div className="pop-inner px-[10rem] small:px-[32px]">
        <span onClick={onClose}>
          <CloseSvg></CloseSvg>
        </span>
        <p className="pop-title mb-[80px]">Transfer</p>

        <input
          className="pop-input mb-[15px]"
          type="text"
          placeholder="Wallet address"
          value={address}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setAddress(event.target.value);
          }}
        />
        <button className="pop-btn-confirm btn-theme-yellow" onClick={transfer}>
          Confirm
        </button>
        <p className="text-red-500">{remind}</p>
        <p className="mt-[20px] text-[2rem] font-[BroR] small:text-[10px]">
          Please be aware that assets transferred to the wrong address can't be
          recovered
        </p>
      </div>
    </div>
  );
};

export default PopSell;
