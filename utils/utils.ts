export const getEnvVar = (key: string) => {
  //   const prefix = process.env.NODE_ENV === 'production' ? '' : 'NEXT_PUBLIC_';
  //   return process.env[`${prefix}${key}`];
  return process.env[`${key}`];
};
