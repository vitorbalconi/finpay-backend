import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../transactions/transactions.service.js';

export interface TransactionMetrics {
  total: number;
  approved: number;
  declined: number;
  approvalRate: number;
}

@Injectable()
export class MetricsService {
  constructor(private readonly transactionsService: TransactionsService) {}

  getMetrics(): TransactionMetrics {
    const transactions = this.transactionsService.findAll();
    const approved = transactions.filter(
      (transaction) => transaction.status === 'approved',
    ).length;
    const declined = transactions.filter(
      (transaction) => transaction.status === 'declined',
    ).length;

    return {
      total: transactions.length,
      approved,
      declined,
      approvalRate:
        transactions.length === 0
          ? 0
          : Number(((approved / transactions.length) * 100).toFixed(2)),
    };
  }
}
