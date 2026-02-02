import { createDeepSeek } from '@ai-sdk/deepseek';

const deepseek = createDeepSeek({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export const model = deepseek('deepseek-chat');
