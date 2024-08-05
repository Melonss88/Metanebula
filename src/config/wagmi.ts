import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { sepolia, arbitrumSepolia, hardhat } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const projectId = "a00f249462f72576ba6637891f6d932c";

// 2. Create wagmiConfig
const metadata = {
  name: "GP_Melon",
  description: "Melon's Graduation Design",
  url: "http://localhost:5173", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

const chains = [sepolia, arbitrumSepolia, hardhat] as const;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", //metaMask
    "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66", //tokenpocket-id
    "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709" //okx wallet
  ],
  allWallets: "HIDE",
  themeMode: "dark",
  themeVariables: {
    "--w3m-font-family": "santral",
    "--w3m-font-size-master": "12px",
    "--w3m-border-radius-master": "2px"
  },
  tokens: {
    //资产显示那块选择显示的币种
    // 1: {
    //   address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    //   image: 'token_image_url' //optional
    // }
  }
});

export { wagmiConfig, queryClient, projectId };
