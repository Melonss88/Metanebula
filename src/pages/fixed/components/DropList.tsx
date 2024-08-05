import { MenuProps } from "antd";
import { Link } from "react-router-dom";

const textList = [
  {
    name: "X",
    link: "https://x.com/chydmelon"
  },
  {
    name: "Telegram",
    link: "https://t.me/guaguaai"
  }
];
const share = (
  <span className="ml-[4rem]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className="share"
    >
      <path
        fill="currentColor"
        d="M6 23q-.825 0-1.412-.587T4 21V10q0-.825.588-1.412T6 8h3v2H6v11h12V10h-3V8h3q.825 0 1.413.588T20 10v11q0 .825-.587 1.413T18 23zm5-7V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16z"
      />
    </svg>
  </span>
);

const CommunityItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        className="header-dropdown-li"
        to={textList[0].link}
        target="_blank"
      >
        {textList[0].name} {share}
      </Link>
    )
  },
  {
    key: "2",
    label: (
      <Link
        className="header-dropdown-li"
        to={textList[1].link}
        target="_blank"
      >
        {textList[1].name} {share}
      </Link>
    )
  }
];

export default CommunityItems;
