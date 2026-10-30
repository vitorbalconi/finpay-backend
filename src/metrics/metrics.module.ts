import { Module } from '@nestjs/common';
import { TransactionsModule } from '../transactions/transactions.module.js';
import { MetricsController } from './metrics.controller.js';
import { MetricsService } from './metrics.service.js';

@Module({
  imports: [TransactionsModule],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
