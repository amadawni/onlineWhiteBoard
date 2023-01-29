import React, {useState} from "react";
import CircularColorPickerButton from "./CircularColorPickerButton";

const Tools = ({
  selectedBrushColor,
  onChangeColor,
  penWidth,
  setPenWidth,
    toolType,
  setToolType,
  eraseWidth,
  setEraseWidth
}) => {
  const availableColors = [
    {
      id: 0,
      color: "#000",
    },
    {
      id: 1,
      color: "#219653",
    },
    {
      id: 2,
      color: "#f2c94c",
    },
    {
      id: 3,
      color: "#2F80ED",
    },
    {
      id: 4,
      color: "#EB5757",
    },
  ];

  return (
    <div
      style={{
        padding: "10px 25px",
        background: "#fff",
        borderRadius: "25px",
        boxShadow: " 0px 5px 31px -10px rgba(0,0,0,0.24)",
      }}
      className="d-flex flex-row align-items-center"
    >
      <div className="d-flex align-items-center">
        <div
          onClick={() => setToolType("BRUSH")}
          style={{
            backgroundColor: toolType === "BRUSH" ? "#219653" : "#fff",
            cursor: "pointer",
          }}
          className="d-flex justify-content-center align-items-center circular-button me-4"
        >
          <i
            style={{
              color: toolType === "BRUSH" ? "#fff" : "#000",
            }}
            className="fa-solid fa-pen"
          ></i>
        </div>
        <div
          style={{
            width: "200px",
          }}
          className="d-flex align-items-center"
        >
          <input
            type="range"
            defaultValue={penWidth}
            min={0}
            max={30}
            className="form-range"
            id="customRange1"
            onChange={(e) => {
              setPenWidth(e.target.value);
            }}
          />
        </div>

        <div className="d-flex flex-row mx-3">
          {availableColors.map((color) => {
            return (
              <CircularColorPickerButton
                key={color.id}
                bgColor={color.color}
                isSelected={selectedBrushColor === color.color ? true : false}
                onClick={() => {
                  onChangeColor(() => color.color);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-row align-item-center ">
        <div
          onClick={() => setToolType("ERASER")}
          style={{
            backgroundColor: toolType === "ERASER" ? "#219653" : "#fff",
            cursor: "pointer",
          }}
          className="d-flex justify-content-center align-items-center circular-button mx-4"
        >
          <i
            style={{
              color: toolType === "ERASER" ? "#fff" : "#000",
            }}
            className="fa-solid fa-eraser"
          ></i>
        </div>
        <div
          style={{
            width: "200px",
          }}
          className="d-flex align-items-center"
        >
          <input
            type="range"
            defaultValue={eraseWidth}
            min={0}
            max={40}
            className="form-range"
            id="customRange1"
            onChange={(e) => {
              setEraseWidth(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
