const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let StallSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  occupied: {
    type: Boolean,
    default: false,
  }
});
let Stall = mongoose.model('Stall', StallSchema);