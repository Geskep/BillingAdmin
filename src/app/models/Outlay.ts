import {AssociatedModel} from './Associated';

export interface OutlayModel {
  _id: string;
  associatedId: string;
  associated?: AssociatedModel;
  date: string;
  amount: number;
  totalIncomes: number;
  totalDeductibles: number;
  deductibles?: DeductibleItem[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DeductibleItem {
  _id: string;
  name: string;
  amount: number;
  type: string;
}


