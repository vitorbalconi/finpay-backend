import { Injectable } from '@nestjs/common';

export interface ApplicationVersion {
  name: string;
  version: string;
}

@Injectable()
export class VersionService {
  getVersion(): ApplicationVersion {
    return {
      name: 'finpay-backend',
      version: process.env.APP_VERSION ?? '1.0.0',
    };
  }
}
