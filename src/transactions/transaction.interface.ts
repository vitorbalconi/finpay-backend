export type TransactionStatus = 'approved' | 'declined';

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string;
}
