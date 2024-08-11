import no_data from "./img/no-data.svg";
const Nodata = () => {
  return (
    <div className="text-center w-full h-full py-[80px] text-[#95d0f9] font-[ftnB]">
      <img src={no_data} alt="no_data.png" />
      <p className="text-[25px] mt-[20px]">No data yet~</p>
    </div>
  );
};

export default Nodata;
