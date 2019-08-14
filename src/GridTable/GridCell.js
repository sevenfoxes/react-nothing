import React from "react";
import classnames from "classnames";

export const GridCell = ({ tableClass, children }) => (
  <div className={classnames(`${tableClass}__cell`)}>{children}</div>
);
