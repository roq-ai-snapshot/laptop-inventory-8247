import { LaptopInterface } from 'interfaces/laptop';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ItInterface {
  id?: string;
  laptop_id: string;
  maintenance_date: any;
  maintenance_notes: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  laptop?: LaptopInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ItGetQueryInterface extends GetQueryInterface {
  id?: string;
  laptop_id?: string;
  maintenance_notes?: string;
  user_id?: string;
}
