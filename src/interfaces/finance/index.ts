import { LaptopInterface } from 'interfaces/laptop';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinanceInterface {
  id?: string;
  laptop_id: string;
  purchase_price: number;
  depreciation_value: number;
  current_value: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  laptop?: LaptopInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FinanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  laptop_id?: string;
  user_id?: string;
}
