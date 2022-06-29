const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsTo(Trips, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
  });
  
//   License.belongsTo(Driver, {
//     foreignKey: 'driver_id',
//   });
  
  Location.hasMany(Trips, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
  });
  
//   Car.belongsTo(Driver, {
//     foreignKey: 'driver_id',
//   });
  
  module.exports = { Traveller, Location, Trips };