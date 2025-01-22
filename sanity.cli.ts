/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli';
import { getEnvVar } from './utils/utils';

const projectId = getEnvVar('SANITY_PROJECT_ID');
const dataset = getEnvVar('SANITY_DATASET');

export default defineCliConfig({ api: { projectId, dataset } });
