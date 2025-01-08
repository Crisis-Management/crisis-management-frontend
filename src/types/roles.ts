export interface Permission {
    id: string;
    name: string;
    description: string;
    resource: string;
    action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  }
  
  export interface Role {
    id: string;
    name: string;
    description: string;
    permissions: Permission[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface UserRole {
    userId: string;
    roleId: string;
    assignedAt: string;
  }