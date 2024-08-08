import PopularCard from "../components/PopularCard";
import { usePopularNFTs } from "../hooks/usePopularNFTs";
import Title from "./Ttitle";
import { Link } from "react-router-dom";

const Popular = () => {
  const { records } = usePopularNFTs();

  return (
    <section className="w-default">
      <div className="flex justify-between items-center">
        <Title title="Popular NFTs" />
        <Link
          to="/nft"
          className="text-[28px] font-[ftn45] text-black cursor-pointer hover:text-[#4ab3fd]"
        >
          View All {">>"}
        </Link>
      </div>
      <div className="flex justify-between items-end text-white">
        {records.map((item, index) => (
          <PopularCard
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
