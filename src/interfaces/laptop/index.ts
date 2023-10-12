import { FinanceInterface } from 'interfaces/finance';
import { InventoryInterface } from 'interfaces/inventory';
import { ItInterface } from 'interfaces/it';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LaptopInterface {
  id?: string;
  brand: string;
  model: string;
  serial_number: string;
  purchase_date: any;
  warranty_expiry_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  finance?: FinanceInterface[];
  inventory?: InventoryInterface[];
  it?: ItInterface[];
  user?: UserInterface;
  _count?: {
    finance?: number;
    inventory?: number;
    it?: number;
  };
}

export interface LaptopGetQueryInterface extends GetQueryInterface {
  id?: string;
  brand?: string;
  model?: string;
  serial_number?: string;
  user_id?: string;
}
