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
          className="text-[28px] font-[ftn45] text-black cursor-pointer "
        >
          View All {">>"}
        </Link>
      </div>
      <div className="flex justify-between items-end text-white">
        {records.map((item, index) => (
          <PopularCard
            key={index}
            name={item.name}
            id={item.id}
            website={item.website}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
