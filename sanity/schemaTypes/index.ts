import { type SchemaTypeDefinition } from 'sanity';
import project from './project';
import services from './services';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, services],
};
