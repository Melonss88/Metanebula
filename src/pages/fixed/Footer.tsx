import logo from "../fixed/images/logo-footer.png";

const logoPart = {
  string: "2024 | Graduation Project of Melon",
  img: logo
};
const footerConfig = [
  {
    title: "NFT",
    cont: ["Collections", "Lastest Sale", "News"]
  },
  {
    title: "Community",
    cont: ["Twitter", "Telegram"]
  },
  {
    title: "About",
    cont: ["About Melonebula", "What's $MNB", "Documentations"]
  },
  {
    title: "Contract Me",
    cont: ["chydmelon@gmail.com", "214A0350 池玉冬"]
  }
];

const Footer = () => {
  return (
    <div className="bg-black text-white text-[24px] mt-[6rem]">
      <div className="w-default pt-[68px] pb-[94px] flex justify-between">
        <section>
          <img src={logoPart.img} className="w-[100px] mb-[2.4rem]"></img>
          <p className="">{logoPart.string}</p>
        </section>
        <ul className="footer-ul flex mt-[70px]">
          {footerConfig.map((item, index) => (
            <li key={index} className="flex-1 min-w-[128px]">
              <p className="font-[ftnB]">{item.title}</p>
              {item.cont.map((item2, index2) => (
                <p key={"cont" + index2}>{item2}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
