import customAxios from "lib/axios/customAxios";
import { PermissionParamsResponse } from "./permission.param";

class PermissionRepository {
  public async getMyPermissionMy(): Promise<PermissionParamsResponse> {
    const { data } = await customAxios.get("permission/my");
    return data;
  }
}

export default new PermissionRepository();
