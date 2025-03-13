import { TOOL_TIP_KEY } from "constants/ToolTip/toolTip.constants";
import token from "libs/Tokens/token";

export const getFirstVisit = (): number => {
  const visitCountValue = token.getToken(TOOL_TIP_KEY);

  if (visitCountValue === undefined) {
    return 0;
  }

  return +visitCountValue;
};
