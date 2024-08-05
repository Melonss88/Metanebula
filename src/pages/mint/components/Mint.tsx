import { Spin, notification } from "antd";
import { useEffect } from "react";
import DUCK from "@/config/abi/DUCK.json";
import { useAccount, useWriteContract } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

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
      // open({ view: "Networks" });
      writeContract({
        address: "0x05Aa229Aec102f78CE0E852A812a388F076Aa555",
        abi: DUCK,
        functionName: "safeMint",
        args: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "ipfs"]
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
    // <Layout>

    <div
      onClick={() => {
        isPending ? null : mint();
      }}
    >
      {!isPending ? (
        <div>MINT NOW</div>
      ) : (
        <Spin
          className="w-[200px] text-center"
          spinning={isPending}
          tip=""
        ></Spin>
      )}
    </div>

    // </Layout>
  );
};

export default Mint;