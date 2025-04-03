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
const TestPage = lazy(() => import("@/pages/test/Index"));

function RootRoute(): JSX.Element {
  const { address } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!address && window.location.pathname === "/assets") {
      navigate("/");
      // <Redirect></Redirect> 研究下用处
    }
  }, [address, navigate]);

  // React Router 4 中的 Switch 组件用于渲染一组 Route 组件，它会遍历其子 Route 组件并依次检查它们是否与当前的location匹配。
  // 重点在于，Switch 会确保只渲染第一个匹配路径的 Route，一旦找到匹配的 Route，它会停止遍历剩余的 Route 子组件。

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
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}
export default RootRoute;
