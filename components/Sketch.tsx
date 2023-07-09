"use client";

import React, { useRef } from "react";
import { P5CanvasInstance, ReactP5Wrapper, Sketch } from "@p5-wrapper/react";

const getParentSize = (parentRef: React.RefObject<HTMLDivElement>) => {
  if (!parentRef.current) return { width: 0, height: 0 };
  const parentElement = parentRef.current;
  const { width, height } = parentElement.getBoundingClientRect();

  return { width, height };
};

const MySketchComponent = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const mySketch: Sketch = (p5: P5CanvasInstance) => {
    let colors: string[] = [
      "#264653",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#E76F51",
      "#8AB17D",
    ];

    p5.setup = () => {
      const { width, height } = getParentSize(parentRef);

      p5.createCanvas(width, height);
      p5.ellipseMode(p5.CENTER);
      p5.rectMode(p5.CENTER);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.fill(generateColor());
      p5.rect(p5.width / 2, p5.height / 2, p5.width, p5.height);

      // Draw center circle and large, primary direction inner and outer circles
      drawPattern(p5, p5.width / 2, p5.height / 2, p5.width);

      let mySize = 200;

      // Create smaller circles in a grid
      for (let x = 0; x <= p5.width; x += mySize) {
        for (let y = 0; y <= p5.height; y += mySize) {
          drawPattern(p5, x, y, mySize);
        }
      }

      for (let iter = 0; iter < 2; iter++) {
        mySize /= 2;

        for (let x = 0; x <= p5.width; x += mySize) {
          for (let y = 0; y <= p5.height; y += mySize) {
            if (p5.random(0, 1) > 0.5) {
              drawPattern(p5, x, y, mySize);
            }
          }
        }
      }
    };

    p5.windowResized = () => {
      const { width, height } = getParentSize(parentRef);

      p5.resizeCanvas(width, height);
    };

    const drawPattern = (
      p5: P5CanvasInstance,
      x: number,
      y: number,
      mySize: number
    ) => {
      p5.noFill();
      //p5.strokeWeight(0.5);
      p5.rect(x, y, mySize);
      p5.fill(generateColor());

      // Draw half circle on left hand side
      p5.arc(
        x - mySize / 2,
        y,
        mySize / 2,
        mySize / 2,
        (3 * p5.PI) / 2,
        p5.PI / 2
      );
      // Draw half circle on right hand side
      p5.arc(
        x + mySize / 2,
        y,
        mySize / 2,
        mySize / 2,
        p5.PI / 2,
        (3 * p5.PI) / 2
      );

      // Draw half circle on top
      p5.arc(x, y - mySize / 2, mySize / 2, mySize / 2, 2 * p5.PI, p5.PI);

      // Draw half circle on bottom
      p5.arc(x, y + mySize / 2, mySize / 2, mySize / 2, p5.PI, 2 * p5.PI);

      // Draw randomly chosen square or circle in the middle
      if (p5.random(0, 1) > 0.5) {
        p5.circle(x, y, mySize / 4);
      } else {
        p5.square(x, y, mySize / 4);
      }

      p5.fill(generateColor());

      // Draw inner half circle on left hand side
      p5.arc(
        x - mySize / 2,
        y,
        mySize / 4,
        mySize / 4,
        (3 * p5.PI) / 2,
        p5.PI / 2
      );

      // Draw inner half circle on right hand side
      p5.arc(
        x + mySize / 2,
        y,
        mySize / 4,
        mySize / 4,
        p5.PI / 2,
        (3 * p5.PI) / 2
      );

      // Draw inner half circle on top
      p5.arc(x, y - mySize / 2, mySize / 4, mySize / 4, 2 * p5.PI, p5.PI);

      // Draw inner half circle on bottom
      p5.arc(x, y + mySize / 2, mySize / 4, mySize / 4, p5.PI, 2 * p5.PI);

      // Randomly draw a cross in the middle
      if (p5.random(0, 1) > 0.5) {
        p5.line(x - mySize / 2, y - mySize / 2, x + mySize / 2, y + mySize / 2);
        p5.line(x - mySize / 2, y + mySize / 2, x + mySize / 2, y - mySize / 2);
      }
    };

    const generateColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };
  };

  return (
    <div ref={parentRef} className="h-full w-full">
      <ReactP5Wrapper sketch={mySketch} />
    </div>
  );
};

export default MySketchComponent;
