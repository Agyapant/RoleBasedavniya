import { Role } from '../utils/constants';
 
export interface User {
  id: number;
  name: string;
  role: Role;
}