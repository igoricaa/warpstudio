import { type SchemaTypeDefinition } from 'sanity';
import project from './project';
import services from './services';
import aboutUs from './about-us';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, aboutUs, services],
};
