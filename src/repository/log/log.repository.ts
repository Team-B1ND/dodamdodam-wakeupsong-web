import xios from "lib/axios/customAxios";
import { postModuleLogParam } from "./log.param";

class LogRepoisitory {
  public async postModuleLog({
    description,
    moduleName,
  }: postModuleLogParam): Promise<void> {
    await customAxios.post("/logging/function", {
      description,
      moduleName,
      platform: "WEB",
    });
  }
}

export default new LogRepoisitory();
