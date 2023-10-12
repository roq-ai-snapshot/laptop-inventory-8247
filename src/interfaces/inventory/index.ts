import { LaptopInterface } from 'interfaces/laptop';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  laptop_id: string;
  quantity: number;
  location: string;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  laptop?: LaptopInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  laptop_id?: string;
  location?: string;
  status?: string;
  user_id?: string;
}
