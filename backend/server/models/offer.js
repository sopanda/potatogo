let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Coords = new Schema({
  lat: { type: Number, required: [true, 'latitude is required'] },
  lng: { type: Number, required: [true, 'longitude is required'] }
});

var Offer = new Schema(
  {
    start_destination: {
      type: Coords,
      required: [true, 'Start destination is required']
    },
    finish_destination: {
      type: Coords,
      required: [true, 'Finish destination is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    distance: {
      type: Number,
      required: [true, 'Distance is required']
    },
    description: {
      type: String
    },
    est_delivery_date: {
      type: Date,
      required: [true, 'Date is required']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Offer', Offer);
