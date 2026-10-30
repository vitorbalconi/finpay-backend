import { TransactionsService } from '../transactions/transactions.service.js';
import { MetricsService } from './metrics.service.js';

describe('MetricsService', () => {
  it('calculates transaction totals and approval rate', () => {
    const service = new MetricsService(new TransactionsService());

    expect(service.getMetrics()).toEqual({
      total: 3,
      approved: 2,
      declined: 1,
      approvalRate: 66.67,
    });
  });
});
