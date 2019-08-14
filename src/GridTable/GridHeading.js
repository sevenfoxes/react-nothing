import React from "react";
import classnames from "classnames";

export const GridHeading = ({ tableClass, children }) => (
  <div className={classnames(`${tableClass}__cell`, `${tableClass}__cell--head`)}>{children}</div>
);
