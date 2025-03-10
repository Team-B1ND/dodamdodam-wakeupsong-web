import { atom } from "recoil";
import { getFirstVisit } from "utils/ToolTip/getFirstVisit";

export const IsFirstVisit = atom({
  key: "Is_First_Visit",
  default: getFirstVisit(),
});
