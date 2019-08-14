import React from "react";
import classnames from "classnames";
import { flow, keys, map } from "lodash/fp";

import { GridHeading } from "./GridHeading";

import "./gridTable.scss";

const testData = {
  "num 1": ["this is column 1", "this is column 1", "this is column 1", "this is column 1"],
  num2: ["this is column 2"],
  num3: ["this is column 3"],
  num4: ["this is column 4"]
};

export const GridTable = ({ tableClass = "grid_table", className = "demo", data = testData }) => (
  <div className={classnames(tableClass, `${tableClass}--${className}`)}>
    {flow(
      keys,
      map(c => (
        <GridHeading key={c} tableClass={tableClass}>
          {c}
        </GridHeading>
      ))
    )(data)}
  </div>
);
