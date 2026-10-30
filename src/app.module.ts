import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { MetricsModule } from './metrics/metrics.module.js';
import { TransactionsModule } from './transactions/transactions.module.js';
import { VersionModule } from './version/version.module.js';

@Module({
  imports: [VersionModule, HealthModule, TransactionsModule, MetricsModule],
})
export class AppModule {}
