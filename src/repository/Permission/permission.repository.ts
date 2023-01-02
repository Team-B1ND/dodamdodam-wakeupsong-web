import customAxios from "lib/axios/customAxios";
import { PermissionParamsResponse } from "./permission.Param";

class permissionRepository {
  public async getMyPermissionMy(): Promise<PermissionParamsResponse> {
    const { data } = await customAxios.get("permission/my");
    return data;
  }
}

export default new permissionRepository();
