import { useAccount } from "wagmi";
import { accountFormat } from "@/utils/web3utils";
import Balanceof from "./Balanceof";
import avatarMine from "../img/avatar-mine.jpg";

const UserInfo = () => {
  const { address } = useAccount();
  const newAddress = accountFormat(address);

  return (
    <section className="userinfo-container bg-[#000] text-white">
      <div className="w-default flex">
        <div className="mr-[35px]">
          <span className="avatar-mine">
            <img src={avatarMine} alt="avatar" />
          </span>
        </div>
        <div>
          <p className="text-[32px] font-[ftn55] pt-[30px]">
            Hello! MNB Member
          </p>
          <p className="text-[20px] text-[#7e7e7e] font-[ftn45]">
            {newAddress}
          </p>
          <Balanceof />
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
