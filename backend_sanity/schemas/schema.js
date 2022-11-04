// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//importing testimonial 
import testimonial from './testimonial'
import work from './work'
import about from './about'
import brands from './brands'
import contact from './contact'
import exp from './exp'
import workexp from './workexp'
import skills from './skills'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    about, brands, skills, exp, workexp, testimonial, work, contact, 

  ]),
})
