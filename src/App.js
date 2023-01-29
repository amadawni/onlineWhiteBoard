import "./App.css";
import { useEffect, useState } from "react";
import { fabric } from "./fabric/fabric";
import Tools from "./component/Tools";

function App() {
  const [selectedBrushColor, setSelectedBrushColor] = useState("#000");
  const [penWidth, setPenWidth] = useState(3);
  const [canvas, setCanvas] = useState();
  const [toolType, setToolType] = useState("BRUSH");
  const [eraseWidth, setEraseWidth] = useState(10);

  useEffect(() => {
    const newCanvas = new fabric.Canvas("canvas", {
      height: window.innerHeight,
      width: window.innerWidt,
      color: selectedBrushColor,
      isDrawingMode: true,
      erasable: true,
    });
    newCanvas.setHeight(window.innerHeight);
    newCanvas.setWidth(window.innerWidth);
    setCanvas(newCanvas);
    console.log(selectedBrushColor);
    return () => newCanvas.dispose();
  }, []);
  useEffect(() => {
    if (canvas) {
      if (toolType === "BRUSH") {
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas, {
          erasable: true,
        });
        canvas.freeDrawingBrush.color = selectedBrushColor
        canvas.freeDrawingBrush.width = penWidth
        
        console.log(toolType);
      } else if (toolType === "ERASER") {
        canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
        canvas.freeDrawingBrush.width = eraseWidth;
        canvas.isDrawingMode = true;
        // canvas.color = "#fff";
      }
      canvas.renderAll.bind(canvas);
    }
  }, [toolType, eraseWidth,penWidth,selectedBrushColor]);
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.color = selectedBrushColor;
      canvas.renderAll.bind(canvas);
    }
  }, [selectedBrushColor]);

  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = penWidth;
      canvas.renderAll.bind(canvas);
    }
  }, [penWidth]);


  return (
    <div>
      <div style={{
        position: "absolute",
        top:"25px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        zIndex: "999",
        
      }}>
        <Tools
          selectedBrushColor={selectedBrushColor}
          onChangeColor={setSelectedBrushColor}
          setPenWidth={setPenWidth}
          penWidth={penWidth}
          toolType={toolType}
          setToolType={setToolType}
          eraseWidth={eraseWidth}
          setEraseWidth={setEraseWidth}
        />
      </div>
      <canvas id="canvas" />
    </div>
  );
}

export default App;
