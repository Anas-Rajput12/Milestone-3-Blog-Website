import { type SchemaTypeDefinition } from 'sanity'

import { post } from '../post'
import {Author} from '../Author'
import {comment} from '../comment'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,Author,comment],
}


