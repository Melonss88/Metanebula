const PopularCard = ({
  id,
  name,
  price
}: {
  id: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="popular-card h-[278px] w-[235px] rounded-[20px] flex flex-col justify-end">
      <p className="text-[2rem] font-[ftnB]"># {id}</p>
      <p className="text-[14px]">{name}</p>
      <p className="text-[18px] font-[ftnB]">{price}</p>
    </div>
  );
};
export default PopularCard;
