import React from "react";

const CircularColorPickerButton = ({ bgColor, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
      }}
      className="colorPickerButton d-flex align-items-center justify-content-center mx-1"
    >
      {isSelected ? (
        <i
          style={{
            color: "#fff",
          }}
          className="fa-solid fa-check"
        ></i>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CircularColorPickerButton;
