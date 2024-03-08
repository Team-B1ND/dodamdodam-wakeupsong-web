import { postModuleLogParam } from "./log.param";
import customAxios from "lib/axios/customAxios";

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
