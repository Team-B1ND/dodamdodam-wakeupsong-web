import { useQuery } from "react-query";
// import permissionRepository from "repository/permission/permission.repository";
import permissionRepository from "repository/Permission/permission.repository";

export const useGetMyPermission = () =>
  useQuery("permission/getMyPermission", () =>
    permissionRepository.getMyPermissionMy()
  );
