const config = {
  include: ['./__tests__/**/*.harness.ts'],

  runners: [
    {
      name: 'android',
      platform: 'android',
      deviceId: 'pixel_7_api_35',
      bundleId: 'nitrofetch.example',
      activityName: '.MainActivity',
    },
  ],
};

export default config;
