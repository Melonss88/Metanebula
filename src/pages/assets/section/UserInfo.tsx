import { useAccount } from "wagmi";
import { accountFormat } from "@/utils/web3utils";
import Balanceof from "./Balanceof";

const UserInfo = () => {
  const { address } = useAccount();
  const newAddress = accountFormat(address);

  return (
    <section className="userinfo-container">
      <p className="text-[24px] font-[ftnB] mt-[10px] small:text-[13px]">
        Welcome
      </p>
      <p className="text-[22px] small:text-[12px] address-container">
        <span>{newAddress}</span>
      </p>
      <Balanceof />
    </section>
  );
};

export default UserInfo;
