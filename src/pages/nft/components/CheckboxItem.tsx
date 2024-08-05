import React from "react";
type CheckboxItemProps = {
  item: string;
  isSelected: boolean;
  onClick: () => void;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  item,
  isSelected,
  onClick
}) => {
  return (
    <div
      className="inputBox cursor-pointer small:flex sm:flex-wrap small:items-center  "
      onClick={onClick}
    >
      <div className="mr-[1rem] rounded-[50%] w-[30px] h-[30px] small:w-[16px] small:h-[16px] small:p-[2px] p-[4px] border border-solid border-[#fff]">
        {isSelected && (
          <div className="bg-[#1fff1a] rounded-[50%] w-full h-full"></div>
        )}
      </div>
      <span className="inputTXT">{item}</span>
    </div>
  );
};

export default CheckboxItem;
