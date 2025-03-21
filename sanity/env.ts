export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2025-01-22';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET ||
    process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
);

export const recaptchaSiteKey = assertValue(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  'Missing environment variable: RECAPTCHA_SITE_KEY'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
