import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useAccount } from "wagmi";

const Home = lazy(() => import("@/pages/home/Index"));
const NFT = lazy(() => import("@/pages/nft/Index"));
const NFTDetail = lazy(() => import("@/pages/nftDetail/nftDetail"));
const MyAssets = lazy(() => import("@/pages/assets/Index"));
const AssetsDetail = lazy(() => import("@/pages/assetsDetail/AssetsDetail"));
const Mint = lazy(() => import("@/pages/mint/Index"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const MNBIntro = lazy(() => import("@/pages/mnb/MNBIntro"));
const NFTIntro = lazy(() => import("@/pages/nftIntro/NFTIntro"));
const Whitepapers = lazy(() => import("@/pages/whitepapers/Whitepapers"));

function RootRoute(): JSX.Element {
  const { address } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!address && window.location.pathname === "/assets") {
      navigate("/");
    }
  }, [address, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<NFT />}></Route>
        <Route path="/nft/detail" element={<NFTDetail />} />
        <Route path="/assets" element={<MyAssets />} />
        <Route path="/assets/detail" element={<AssetsDetail />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mnb" element={<MNBIntro />} />
        <Route path="/nft/intro" element={<NFTIntro />} />
        <Route path="/whitepapers" element={<Whitepapers />} />
      </Routes>
    </>
  );
}
export default RootRoute;
