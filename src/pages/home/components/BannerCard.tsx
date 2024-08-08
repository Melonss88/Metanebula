const BannerCard = ({
  img,
  title,
  text
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-[287px]">
      <div className="overflow-hidden rounded-[20px]">
        <img className="h-[287px]" src={img} alt="banner.png" />
      </div>
      <h1 className="text-[4rem] font-[ftn55] text-[#4ab3fd]">{title}</h1>
      <h3 className="text-[24px] font-[ftn35]">{text}</h3>
    </div>
  );
};
export default BannerCard;
