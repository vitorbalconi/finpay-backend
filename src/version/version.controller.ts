import { Controller, Get } from '@nestjs/common';
import { VersionService } from './version.service.js';
import type { ApplicationVersion } from './version.service.js';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  getVersion(): ApplicationVersion {
    return this.versionService.getVersion();
  }
}
