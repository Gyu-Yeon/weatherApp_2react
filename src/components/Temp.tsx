import React, { memo } from "react";
import { TempProps } from "../types/types";

const Temp = memo(({ temp }: TempProps) => {
  return (
    <div className="temperature-container">
      <p style={{ marginTop: "25px" }} className="temp">
        {temp}°{" "}
      </p>
    </div>
  );
});

export default Temp;
