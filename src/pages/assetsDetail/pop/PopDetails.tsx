import "@/assets/commonCss/common.pop.scss";
import CloseSvg from "@/assets/svg/CloseSvg";
import { ChangeEvent, useEffect, useState } from "react";
import DUCK from "@/config/abi/DUCK.json";
import { notification } from "antd";
import { useWriteContract } from "wagmi";
import { nftItemType } from "@/pages/nft/section/type";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

const contractAddr = import.meta.env.VITE_API_CONTRACT_ADDR;

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
    isError,
    failureReason,
    writeContract
  } = useWriteContract();

  const transfer = () => {
    if (!address) return setRemind("The address can not be empty");
    try {
      writeContract({
        address: contractAddr,
        abi: DUCK,
        functionName: "nftTransfer",
        args: [myaddress, address, data?.tokenId]
      });
    } catch {
      notification.error({
        placement: "top",
        message: "user rejected!"
      });
    }
  };

  const confirmBuy = () => {
    try {
      writeContract({
        address: contractAddr,
        abi: DUCK,
        functionName: "buy",
        args: [data?.tokenId],
        value: BigInt(ethers.parseEther(String(data?.price)).toString())
      });
    } catch (error) {
      console.log("error", error);
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
        message: "Success!"
      });
      onclose;
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(isError, "Error");
      notification.error({
        placement: "top",
        message: "Error!"
      });
    }
  }, [isError]);

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
            <button
              className="pop-btn-confirm btn-theme-blue"
              onClick={confirmBuy}
            >
              Confirm Buy
            </button>
            <p className="text-[#8c8c8c] text-[14px]">
              After the transaction is successful, a 4.5% handing fee will be
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
