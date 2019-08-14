import React from "react";
import classnames from "classnames";
import { flow, keys, map, values, tap } from "lodash/fp";

import { GridHeading } from "./GridHeading";
import { GridCell } from "./GridCell";

import "./gridTable.scss";
const c = { fname: { label: "First Name", def: r => r.lname }, age: { label: "Age", def: "DEAD" } };
const d = [{ fname: "bob", lname: "smith", age: 39 }, { fname: "aaron", lname: "cohen", age: 102 }, { lname: "Who?" }];

export const GridTable = ({ tableClass = "grid_table", className = "demo", data = d, columns = c }) => (
  <div className={classnames(tableClass, `${tableClass}--${className}`)}>
    {flow(
      map.convert({ cap: false })(({ label }, k) => (
        <GridHeading key={k} tableClass={tableClass}>
          {label}
        </GridHeading>
      ))
    )(columns)}
    {map(
      row =>
        flow(
          map.convert({ cap: false })(({ def }, k) => (
            <GridCell key={k} tableClass={tableClass}>
              {row[k] === undefined
                ? (() => {
                    switch (typeof def) {
                      case "string":
                        return def;
                      case "function":
                        return def(row);
                    }
                  })()
                : row[k]}
            </GridCell>
          ))
        )(columns),
      data
    )}
  </div>
);
