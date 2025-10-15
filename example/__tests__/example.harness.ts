import { describe, it, expect } from 'react-native-harness';
import { fetch as nitroFetch } from 'react-native-nitro-fetch';

describe('react-native-nitro-fetch', () => {
  it('should successfully fetch example.com', async () => {
    const res = await nitroFetch('https://example.com');
    expect(res.status).toBe(200);
  });
});
