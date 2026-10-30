import { Injectable } from '@nestjs/common';
import { VersionService } from '../version/version.service.js';

export interface HealthStatus {
  status: string;
  timestamp: string;
  version: string;
}

@Injectable()
export class HealthService {
  constructor(private readonly versionService: VersionService) {}

  getHealth(): HealthStatus {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: this.versionService.getVersion().version,
    };
  }
}
