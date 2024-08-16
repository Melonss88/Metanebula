import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import mobileStore from "@/stores/mobileStore";
import { useAccount, useReadContract, useBalance } from "wagmi";
import ARB from "@/config/abi/ARB.json";
import { parseAbi } from "viem";
import { ethers } from "ethers";

// ERC20 代币的合约 ABI
const tokenABI = ARB;
// Arbitrum合约地址
const tokenAddress = "0x912CE59144191C1204E64559FE8253a0e49E6548";

const Balanceof = () => {
  const { address } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);
  // const [tokenBalance, setTokenBalance] = useState<string | null>(null);

  // 使用 wagmi 提供的 useBalance hook 获取 ETH 余额
  const { data: ethBalanceData, isError: isEthBalanceError } = useBalance({
    address
  });

  useEffect(() => {
    if (ethBalanceData && !isEthBalanceError) {
      const formatUnits = ethers.hasOwnProperty("formatUnits")
        ? ethers.formatUnits
        : ethers.utils.formatUnits;
      const formattedBalance = formatUnits(
        String(ethBalanceData?.value),
        ethBalanceData?.decimals
      );
      setBalance(formattedBalance);
    }
  }, [ethBalanceData, isEthBalanceError]);

  // 使用 wagmi 提供的 useReadContract hook 获取 token 代币的余额
  // const { data: balanceData, isError: isBalanceError } = useReadContract({
  //   address: tokenAddress,
  //   abi: parseAbi(["function balanceOf(address) view returns (uint256)"]),
  //   functionName: "balanceOf",
  //   args: address ? [address] : undefined
  // });

  // const { data: decimalsData, isError: isDecimalsError } = useReadContract({
  //   address: tokenAddress,
  //   abi: parseAbi(["function decimals() view returns (uint8)"]),
  //   functionName: "decimals"
  // });

  // useEffect(() => {
  //   if (balanceData && decimalsData && !isBalanceError && !isDecimalsError) {
  //     const formattedBalance = ethers.utils.formatUnits(
  //       String(balanceData),
  //       String(decimalsData)
  //     );
  //     setTokenBalance(formattedBalance);
  //   }
  // }, [balanceData, decimalsData, isBalanceError, isDecimalsError]);

  return (
    <section className="balanceof-container pb-[25px] mt-[6px]">
      <ul className="balanceof-ul font-[ftnB] text-[36px]">
        <li>
          <span className="text-[28px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0L4.63 12.22L12 16.574l7.37-4.354zm0 24L4.63 13.617L12 18l7.37-4.383z"
              ></path>
            </svg>
          </span>
          <span> {ethBalanceData?.symbol}</span>
          <span className="ml-[2rem]">{balance || "--"}</span>
        </li>
      </ul>
    </section>
  );
};

export default observer(Balanceof);
