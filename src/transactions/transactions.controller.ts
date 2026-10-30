import { Controller, Get } from '@nestjs/common';
import { Transaction } from './transaction.interface.js';
import { TransactionsService } from './transactions.service.js';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll(): Transaction[] {
    return this.transactionsService.findAll();
  }
}
