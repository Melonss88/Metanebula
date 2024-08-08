import { Dropdown, MenuProps } from "antd";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const User = () => {
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const assetsItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link className="header-dropdown-li" to="/assets">
          <span className="user-left">
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.23828 19.5C4.56369 17.2892 7.46856 15.7762 12.0006 15.7762C16.5326 15.7762 19.4374 17.2892 20.7628 19.5M15.6006 8.1C15.6006 10.0882 13.9888 11.7 12.0006 11.7C10.0123 11.7 8.40056 10.0882 8.40056 8.1C8.40056 6.11177 10.0123 4.5 12.0006 4.5C13.9888 4.5 15.6006 6.11177 15.6006 8.1Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
            <span>Profile</span>
          </span>
          <svg
            width="20"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="share"
          >
            <path
              d="M2.66602 8H13.3327M13.3327 8L9.33268 4M13.3327 8L9.33268 12"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      )
    },
    {
      key: "2",
      label: (
        <div className="header-dropdown-li" onClick={() => disconnect()}>
          <span className="user-left">
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>Logout</span>
          </span>
          <svg
            width="20"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="share"
          >
            <path
              d="M2.66602 8H13.3327M13.3327 8L9.33268 4M13.3327 8L9.33268 12"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="btn-container big:flex items-center big:ml-[100px]">
      {!address && (
        <button
          onClick={() => open()}
          className="btn-theme-blue big:ml-[1.5rem] w-[218px] font-[ftnB] text-[2.8rem]"
        >
          Connect
        </button>
      )}
      {address && (
        <Dropdown menu={{ items: assetsItems }} placement="bottomRight">
          <span className="h-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="cursor-pointer"
            >
              <path
                fill="#4ab3fd"
                d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </span>
        </Dropdown>
      )}

      {/* <w3m-button balance="hide"></w3m-button> */}
    </div>
  );
};

export default User;
