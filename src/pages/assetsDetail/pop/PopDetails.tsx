import "@/assets/commonCss/common.pop.scss";
import CloseSvg from "@/assets/svg/CloseSvg";
import { ChangeEvent, useEffect, useState } from "react";
import DUCK from "@/config/abi/DUCK.json";
import { notification } from "antd";
import { useWriteContract } from "wagmi";
import { nftItemType } from "@/pages/nft/section/type";
import { useAccount } from "wagmi";

const PopDetails = ({
  onClose,
  data,
  type
}: {
  onClose: () => void;
  data: nftItemType | null;
  type: string;
}) => {
  const [address, setAddress] = useState("");
  const [remind, setRemind] = useState("");
  const { address: myaddress } = useAccount();
  const {
    data: mintData,
    isSuccess,
    isError: TransferError,
    failureReason,
    writeContract
  } = useWriteContract();

  const transfer = () => {
    if (!address) return setRemind("The address can not be empty");
    console.log([myaddress, address, data?.tokenId]);
    try {
      console.log("address:", address);
      writeContract({
        address: "0x0116686E2291dbd5e317F47faDBFb43B599786Ef",
        abi: DUCK,
        functionName: "nftTransfer",
        args: [myaddress, address, data?.tokenId]
        //0x1a986Eb3a891fc39743aF482e24687B708eA2425
        //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
        //0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
        //0x90F79bf6EB2c4f870365E785982E1f101E93b906
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
    if (TransferError) {
      console.log(TransferError, "TransferError");
      notification.error({
        placement: "top",
        message: "Transfer Error!"
      });
    }
  }, [TransferError]);

  useEffect(() => {
    if (failureReason) {
      console.log(failureReason, "failureReason");
    }
  }, [failureReason]);

  return (
    <div className="pop-container">
      <div className="pop-inner px-[10rem] small:px-[32px]">
        <span onClick={onClose} className="pop-close">
          <CloseSvg />
        </span>
        <p className="pop-title">
          {data?.name} #{data?.tokenId}
        </p>

        <div className="pop-avatar">
          <span className="pop-avatar-img">
            <img src={data?.imageURL} alt="avatar.png" />
          </span>
        </div>

        <p className="text-red-500">{remind}</p>
        {type == "nft" && (
          <>
            <p className="pop-price mb-[6px]">{data?.price}</p>
            <button className="pop-btn-confirm btn-theme-blue">
              Confirm Buy
            </button>
            <p className="text-[#8c8c8c] text-[14px]">
              After the tramsaction is successful, a 4.5% handing fee will be
              charged
            </p>
          </>
        )}
        {type == "assets" && (
          <>
            <input
              className="pop-input mb-[15px]"
              type="text"
              placeholder="Wallet address"
              value={address}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setAddress(event.target.value);
              }}
            />

            <button
              className="pop-btn-confirm btn-theme-blue"
              onClick={transfer}
            >
              Confirm
            </button>
            <p className="text-[#8c8c8c] text-[14px]">
              Please be aware that assets transferred to the wrong address can't
              be recovered
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PopDetails;
