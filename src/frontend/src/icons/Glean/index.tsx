import type React from "react";
import { forwardRef } from "react";
import SvgGlean from "./Glean";

export const GleanIcon = forwardRef<SVGSVGElement, React.PropsWithChildren<{}>>(
  (props, ref) => {
    return <SvgGlean ref={ref} {...props} />;
  },
);
