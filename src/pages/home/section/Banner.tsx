import TextWelcome from "../components/TextWelcome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerCard from "../components/BannerCard";
import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
import banner4 from "../img/banner4.png";
import { useBannerConfig } from "../hooks/useBannerConfig";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  const { records } = useBannerConfig();

  return (
    <section className="h-[580px] text-white relative bg-black">
      <div className="w-default">
        <div className="flex justify-center">
          <TextWelcome />
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {records.map((item, index) => (
            <BannerCard
              key={index}
              img={item.imgURL}
              title={item.title}
              text={item.content}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;
