/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Demo item 1'
  }, {
    name : 'Demo item 2'
  }, {
    name : 'Demo item 3'
  },  {
    name : 'Demo item 4'
  },  {
    name : 'Demo item 5'
  },{
    name : 'Demo item 6'
  });
});