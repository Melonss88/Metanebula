import no_data from "./img/no_data.webp";
const Nodata = () => {
  return (
    <div className="text-center w-full h-full py-[80px]">
      <img src={no_data} alt="no_data.png" />
      <p className="text-[25px] text-white font-[BroB]">No data yet~</p>
    </div>
  );
};

export default Nodata;
