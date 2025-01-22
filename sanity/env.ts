import { getEnvVar } from '@/utils/utils';

export const apiVersion = getEnvVar('SANITY_API_VERSION') || '2025-01-22';

export const dataset = assertValue(
  getEnvVar('SANITY_DATASET'),
  'Missing environment variable: SANITY_DATASET'
);

export const projectId = assertValue(
  getEnvVar('SANITY_PROJECT_ID'),
  'Missing environment variable: SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
