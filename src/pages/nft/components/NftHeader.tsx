import { list, useNftHeaderContext } from "../NFT";
import classNames from "classnames";
const NftHeader = () => {
  const { nftTab, setNftTab, showFilter, setShowFilter } =
    useNftHeaderContext();
  const onClickshowFilter = async function () {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <div className="title flex justify-between items-center">
        <div className="types">
          {list.map((item, index) => (
            <button
              key={index}
              className={classNames("item", {
                active: nftTab == item
              })}
              onClick={() => {
                setNftTab(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="show_fiter flex cursor-pointer items-start"
          onClick={onClickshowFilter}
        >
          <span>Filter</span>
          {!showFilter && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="32"
              viewBox="0 0 24 24"
              className="small:w-[22px] small:h-[22px]"
            >
              <path
                fill="#9b9b9b"
                d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
              />
            </svg>
          )}
          {showFilter && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="32"
              viewBox="0 0 24 24"
              className="small:w-[22px] small:h-[22px]"
            >
              <path fill="#9b9b9b" d="m7 14l5-5l5 5z" />
            </svg>
          )}
        </div>
      </div>
      <p className="bar-breakup"></p>
    </>
  );
};

export default NftHeader;
