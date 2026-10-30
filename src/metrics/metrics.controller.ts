import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service.js';
import type { TransactionMetrics } from './metrics.service.js';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  getMetrics(): TransactionMetrics {
    return this.metricsService.getMetrics();
  }
}
