import { type SchemaTypeDefinition } from 'sanity';
import project from './project';
import services from './services';
import aboutUs from './about-us';
import photography from './photography';
import videos from './videos';
import vfxProjects from './vfxProjects';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, aboutUs, services, photography, vfxProjects, videos],
};
