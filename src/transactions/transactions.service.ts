import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.interface.js';

@Injectable()
export class TransactionsService {
  private readonly transactions: Transaction[] = [
    {
      id: 'txn_001',
      amount: 149.9,
      currency: 'BRL',
      status: 'approved',
      createdAt: '2026-01-15T10:30:00.000Z',
    },
    {
      id: 'txn_002',
      amount: 79.5,
      currency: 'BRL',
      status: 'declined',
      createdAt: '2026-01-16T14:20:00.000Z',
    },
    {
      id: 'txn_003',
      amount: 320,
      currency: 'BRL',
      status: 'approved',
      createdAt: '2026-01-17T09:05:00.000Z',
    },
  ];

  findAll(): Transaction[] {
    return this.transactions.map((transaction) => ({ ...transaction }));
  }
}
