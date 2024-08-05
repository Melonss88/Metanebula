import { Link } from "react-router-dom";
const DetailBack = ({ linkTo }: { linkTo: string }) => {
  return (
    <Link
      className="block hover:text-inherit leading-[2.4em] text-white w-[15rem] small:w-[9.5rem] h-[5rem] small:h-[3rem] rounded-[2.5rem] text-center text-[2.2rem] small:text-[1.4rem] bg-[#333] border-0 cursor-pointer"
      to={linkTo}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="align-text-bottom small:w-[20px] small:h-[20px]"
      >
        <path
          fill="currentColor"
          d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
        />
      </svg>
      BACK
    </Link>
  );
};

export default DetailBack;
