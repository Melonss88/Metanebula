import Header from "@/pages/fixed/Header";
import RootRoute from "./router";
import Footer from "./pages/fixed/Footer";
import mobileStore from "@/stores/mobileStore";
import { Provider } from "mobx-react";
import { useLocation } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { queryClient, wagmiConfig } from "./config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Provider as ReduxProvider } from "react-redux";
// import ReduxStore from '@/redux/store'

const stores = {
  mobileStore
};
function App() {
  const location = useLocation();
  // const noFooterArr = ["/mint"];
  // const isNoFooter = noFooterArr.indexOf(location.pathname) > -1;

  return (
    <Provider {...stores}>
      {/* <ReduxProvider store={ReduxStore}> */}
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <div>
            <Header />
            <RootRoute />
            {/* {!isNoFooter && <Footer />} */}
            <Footer />
          </div>
        </WagmiProvider>
      </QueryClientProvider>
      {/* </ReduxProvider> */}
    </Provider>
  );
}

export default App;
