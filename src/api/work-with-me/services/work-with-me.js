'use strict';

/**
 * work-with-me service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-with-me.work-with-me');
