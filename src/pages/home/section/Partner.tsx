import Title from "./Ttitle";
import partner1 from "../img/partner1.png";
import partner2 from "../img/partner2.png";
import partner3 from "../img/partner3.png";

const Partner = () => {
  const partnerConfig = [partner1, partner2, partner3];
  return (
    <section className="w-default">
      <Title title="Partner with MNB Marketplace" />
      <ul className="flex justify-between -mx-2.5">
        {partnerConfig.map((item, index) => (
          <li key={index}>
            <img src={item} alt="partner.png" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partner;
