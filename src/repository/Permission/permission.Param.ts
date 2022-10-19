export interface PermissionParams {
  id: number;
  member: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: string;
    role: "ADMIN" | "STUDENT";
    status: "ACTIVE" | "DEACTIVATED";
    student: {
      classroom: {
        grade: number;
        id: number;
        placeId: number;
        room: number;
      };
      id: number;
      number: number;
      phone: string;
    };
  };
  permission: string;
}

export interface PermissionParamsResponse {
  data: PermissionParams;
}
