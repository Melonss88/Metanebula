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
      <div className="mr-[6px] rounded-[50%] w-[16px] h-[16px] small:w-[16px] small:h-[16px] small:p-[2px] p-[3px] border border-solid border-[#1f1f1f]">
        {isSelected && (
          <div className="bg-[#27a0f8] rounded-[50%] w-full h-full"></div>
        )}
      </div>
      <span className="inputTXT">{item}</span>
    </div>
  );
};

export default CheckboxItem;
