import "./index.scss";
import Banner from "./section/Banner";
import Partner from "./section/Partner";
import Popular from "./section/Popular";
import Studio from "./section/Studio";

const HomeIndex = () => {
  return (
    <div className="to-top home-container">
      <Banner />
      <Popular />
      <Studio />
      <Partner />
    </div>
  );
};

export default HomeIndex;
