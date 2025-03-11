import { atom } from "recoil";
import { getFirstVisit } from "utils/ToolTip/getFirstVisit";

export const VisitCount = atom({
  key: "Visit_Count",
  default: getFirstVisit(),
});
