import Header from "@/pages/fixed/Header";
import RootRoute from "./router";
import Footer from "./pages/fixed/Footer";
import mobileStore from "@/stores/mobileStore";
import { Provider } from "mobx-react";
import { useLocation } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { queryClient, wagmiConfig } from "./config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";

const stores = {
  mobileStore
};
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Provider {...stores}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <div className="bg-black">
            <Header />
            <RootRoute />
            {isHomePage && <Footer />}
          </div>
        </WagmiProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;