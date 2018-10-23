import { schema } from 'normalizr';

export const imageSchema = new schema.Entity('images');
export const imageListSchema = new schema.Array(imageSchema);
