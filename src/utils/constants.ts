 
export const ROLES = ['Admin', 'Manager', 'Team Lead', 'Guest', 'Owner'] as const;
 
export type Permission = 'delete' | 'update' | 'edit' | 'view';
export type Role = typeof ROLES[number];
 
export const PERMISSIONS: Record<Role, Permission[]> = {
  'Admin': ['delete', 'update', 'edit', 'view'],
  'Manager': ['update', 'edit', 'view'],
  'Team Lead': ['view'],
  'Guest': [],
  'Owner': ['delete', 'update', 'edit', 'view'],
}; 