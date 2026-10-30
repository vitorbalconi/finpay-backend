import { VersionService } from './version.service.js';

describe('VersionService', () => {
  const originalVersion = process.env.APP_VERSION;

  afterEach(() => {
    if (originalVersion === undefined) {
      delete process.env.APP_VERSION;
    } else {
      process.env.APP_VERSION = originalVersion;
    }
  });

  it('uses the default version when APP_VERSION is absent', () => {
    delete process.env.APP_VERSION;

    expect(new VersionService().getVersion()).toEqual({
      name: 'finpay-backend',
      version: '1.0.0',
    });
  });

  it('reads the version from APP_VERSION', () => {
    process.env.APP_VERSION = '2.1.0';

    expect(new VersionService().getVersion().version).toBe('2.1.0');
  });
});
