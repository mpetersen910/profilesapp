import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  entry: './handler.ts', // Path to the handler file within the code directory
});