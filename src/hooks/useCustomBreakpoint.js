import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function useCustomBreakpoint(theme) {
  const isMobile = useMediaQuery(
    theme.breakpoints.between(
      theme.layouts.mobile.min,
      theme.layouts.mobile.max
    )
  );

  let isTab = useMediaQuery(
    theme.breakpoints.between(theme.layouts.tab.min, theme.layouts.tab.max)
  );

  if (isMobile === true) {
    isTab = true;
  }
  const isDesktop = useMediaQuery(
    theme.breakpoints.between(
      theme.layouts.desktop.min,
      theme.layouts.desktop.max
    )
  );

  return [isMobile, isTab, isDesktop];
}

export default useCustomBreakpoint;
