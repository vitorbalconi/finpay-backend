import { VersionService } from '../version/version.service.js';
import { HealthService } from './health.service.js';

describe('HealthService', () => {
  it('returns an ok status, timestamp and version', () => {
    const service = new HealthService(new VersionService());
    const health = service.getHealth();

    expect(health.status).toBe('ok');
    expect(health.version).toBe('1.0.0');
    expect(new Date(health.timestamp).toISOString()).toBe(health.timestamp);
  });
});
