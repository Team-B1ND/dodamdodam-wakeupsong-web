import customAxios from "lib/axios/customAxios";
import { permissionParamsResponse } from "./permission.Param";

class permissionRepository {
  public async getPermissionMy(): Promise<permissionParamsResponse> {
    const { data } = await customAxios.get("permission/my");
    return data;
  }
}

export default new permissionRepository();
