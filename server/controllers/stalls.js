const mongoose = require('mongoose');
let Stall = mongoose.model('Stall');
module.exports = {
  index: function (req, res) {
    Stall.find({}, function (err, stall) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(stall);
      }
    });
  },
  create: function (req, res) {
    Stall.create(req.body, function (err, stall) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(stall);
      }
    });
  },
  occupied: function (req, res) {
    Stall.findOne({_id:req.params.id}, function (err, stall) {
      stall.occupied = true;
      stall.save(function (err) {
        if (err) {
          res.json(err)
        }
        else {
          res.json({message: 'Occupied'})
        }
      })
    })
  },
  vacant: function (req, res) {
    Stall.findOne({_id:req.params.id}, function (err, stall) {
      stall.occupied = false;
      stall.save(function (err) {
        if (err) {
          res.json(err)
        }
        else {
          res.json({message: 'Now Vacant'})
        }
      })
    })
  }
};