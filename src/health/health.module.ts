import { Module } from '@nestjs/common';
import { VersionModule } from '../version/version.module.js';
import { HealthController } from './health.controller.js';
import { HealthService } from './health.service.js';

@Module({
  imports: [VersionModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
