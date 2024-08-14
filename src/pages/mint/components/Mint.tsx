import { Spin, notification } from "antd";
import { useEffect } from "react";
import DUCK from "@/config/abi/DUCK.json";
import { useAccount, useWriteContract } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const contractAddr = import.meta.env.VITE_API_CONTRACT_ADDR;

const Mint = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const {
    data: mintData,
    isPending,
    isSuccess,
    isError: mintError,
    failureReason,
    writeContract
  } = useWriteContract();

  const mint = () => {
    if (!address) {
      open();
      return;
    }
    if (isPending) {
      notification.error({
        placement: "top",
        message: "Please login!"
      });
    }
    try {
      writeContract({
        address: contractAddr,
        abi: DUCK,
        functionName: "safeMint",
        args: [
          address,
          "https://harlequin-obliged-nightingale-746.mypinata.cloud/ipfs/QmX49CDyXZbLAFwdfQbmuEMpPU9FsxGBFjt1P8FTP4D2MF/configAll.json"
        ]
      });
    } catch (error) {
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
    <button
      onClick={() => {
        isPending ? null : mint();
      }}
    >
      {!isPending && "Mint Now"}
      {isPending && (
        <Spin
          className="w-[200px] text-center"
          spinning={isPending}
          tip=""
        ></Spin>
      )}
    </button>
  );
};

export default Mint;
