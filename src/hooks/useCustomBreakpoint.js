import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function useCustomBreakpoint(theme) {
  const isMobile = useMediaQuery(
    theme.breakpoints.between(
      theme.layouts.mobile.min,
      theme.layouts.mobile.max
    )
  );

  const isTab = useMediaQuery(
    theme.breakpoints.between(theme.layouts.tab.min, theme.layouts.tab.max)
  );

  const isDesktop = useMediaQuery(
    theme.breakpoints.between(
      theme.layouts.desktop.min,
      theme.layouts.desktop.max
    )
  );

  return [isMobile, isTab, isDesktop];
}

export default useCustomBreakpoint;
