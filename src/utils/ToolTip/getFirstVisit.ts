import { TOOL_TIP_KEY } from "constants/ToolTip/toolTip.constants";

export const getFirstVisit = (): boolean => {
  const isFirstVisitValue = window.localStorage.getItem(TOOL_TIP_KEY);

  if (typeof window !== "undefined" && isFirstVisitValue === null) {
    return true;
  }

  if (isFirstVisitValue === "true") {
    return true;
  }

  return false;
};
