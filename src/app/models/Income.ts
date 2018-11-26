import {AssociatedModel} from './Associated';

export interface IncomeModel {
  _id: string;
  amount: number;
  associatedId: string;
  associated?: AssociatedModel;
  date: string;
  payed?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}


