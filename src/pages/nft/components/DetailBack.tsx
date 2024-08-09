import { Link } from "react-router-dom";
const DetailBack = ({ linkTo }: { linkTo: string }) => {
  return (
    <Link
      className="block cursor-pointer text-[#4ab3fd] font-[ftnB] text-[24px]"
      to={linkTo}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 16 16"
        className="align-baseline mr-[10px]"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
      Back
    </Link>
  );
};

export default DetailBack;
