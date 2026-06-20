export type RoleStatus = "Active" | "Inactive";

export interface RolePermission {
  moduleId: string;
  moduleName: string;
  read: boolean;
  write: boolean;
  delete: boolean;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: RolePermission[];
  isDefault: boolean;
  status: RoleStatus;
}
