import { TransactionsService } from './transactions.service.js';

describe('TransactionsService', () => {
  it('returns the in-memory transactions', () => {
    const transactions = new TransactionsService().findAll();

    expect(transactions).toHaveLength(3);
    expect(transactions[0]).toMatchObject({
      id: 'txn_001',
      currency: 'BRL',
      status: 'approved',
    });
  });
});
