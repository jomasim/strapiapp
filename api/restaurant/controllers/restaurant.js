'use strict'
const { sanitizeEntity } = require('strapi-utils')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find (ctx) {
    let entities
    if (ctx.query) {
      entities = await strapi.services.restaurant.find(ctx.query)
      console.log(entities, 'here')
      return entities.map(entity => {
        const author =
          entity.created_by.firstname + ' ' + entity.created_by.lastname
        entity.created_by = author
        return entity
      })
    }
  }
}
