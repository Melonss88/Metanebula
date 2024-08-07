import "./header.scss";
import { Link } from "react-router-dom";
import logoImg from "@/pages/fixed/images/logo.jpg";
import CommunityItems from "./components/DropList";
import { Dropdown } from "antd";
import mobileStore from "@/stores/mobileStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import User from "./components/User";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    const updateMobileState = () => {
      mobileStore.updateIsMobile();
      if (document.documentElement.clientWidth < 970) {
        setShowList(false);
      } else {
        setShowList(true);
      }
    };

    updateMobileState();
    window.addEventListener("resize", updateMobileState);

    return () => {
      window.removeEventListener("resize", updateMobileState);
    };
  }, []);

  return (
    <section className="header-container text-[1.6rem] fixed top-0 left-0 right-0 z-[2000]">
      {/* 顶部黄条 */}
      {!mobileStore.isMobile && (
        <div className="h-[40px] text-right flex bg-gradient">
          <div className="text-[#000] w-default">
            <p className="flex justify-end items-center top-link">
              <a href="/">Graduation Project -- 214A0350池玉冬</a>
            </p>
          </div>
        </div>
      )}
      {/* 导航栏nav */}
      <div className="h-[64px] bg-common">
        <div className="nav-conatiner relative big:flex justify-between w-default h-full items-center">
          <div className="flex justify-between items-center w-full">
            <Link
              to="/"
              className="block w-[28px] h-[28px] big:h-[52px] big:w-[52px] rounded-[50%] overflow-hidden mt-2 mb-2"
            >
              <img
                src={logoImg}
                className="w-full h-full align-middle cursor-pointer"
                alt="xcats"
              />
            </Link>

            {mobileStore.isMobile && (
              <div
                onClick={() => {
                  setShowList(!showList);
                }}
              >
                {!showList && (
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4 14H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4 20L20 20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}

                {showList && (
                  <svg
                    className="w-[1.8rem]"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1 1 13M1 1l12 12"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}
              </div>
            )}
          </div>
          {showList && (
            <div className="header-link big:flex h-full">
              <ul className="header-route big:flex items-center ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/mint">Mint</Link>
                </li>
                <li>
                  <Link to="/nft">NFT</Link>
                </li>
                <li
                  onMouseOver={() => {
                    setIsDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setIsDropdown(false);
                  }}
                >
                  <Dropdown menu={{ items: CommunityItems }}>
                    <div className="h-full li-dropdown">Community</div>
                  </Dropdown>
                  {isDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFA801"
                        d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"
                      />
                    </svg>
                  )}
                  {!isDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFA801"
                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                      />
                    </svg>
                  )}
                </li>
              </ul>

              <User />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default observer(Header);
