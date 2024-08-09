import "./index.scss";
import UserInfo from "./section/UserInfo";
import AssetsItems from "./section/AssetsItems";

const myAssetsIndex = () => {
  return (
    <div className="to-top assets-container">
      <section className="flex items-start">
        <div className="w-default">
          <div className="">
            <UserInfo />
            <p className="bar-breakup"></p>
            <AssetsItems />
          </div>
        </div>
      </section>
    </div>
  );
};

export default myAssetsIndex;
