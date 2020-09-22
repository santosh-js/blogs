// React Hook by material-ui for
import useMediaQuery from "@material-ui/core/useMediaQuery";

// react hook to get current screen resolutions for mobile, tab & desktop
// (size's defined in global theme object)
function useCustomBreakpoint(theme) {
  // passed theme object is from theme store object

  // Used between() for custom requirement
  // Usage of down() as per the screen size's mentioned is recommended
  // for details follow => https://material-ui.com/components/use-media-query/#usemediaquery
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
