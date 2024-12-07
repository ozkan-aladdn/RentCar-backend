"use strict";

const Car = require("../models/car");

module.exports = {
  list: async (req, res) => {
    const data = await Car.find()
    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req,res) => {
    const data = await Car.create(req.body)
    res.status(201).send({
        error: false,
        data
    })
},

  read: async (req, res) => {
    const data = await Car.findOne({ _id: req.params.id })
    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Car.updateOne(
      //updateOne güncelleme işleminin olup olmadığını ve kaç verinin değiştiğini gösterir, verinin kendisini göstermez.
      { _id: req.params.id },
      req.body,
      { runValidators: true }
    )
    res.status(200).send({
      error: false,
      data,
      new: await Car.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Car.deleteOne(
      // kaç verinin silindiğini görürüz.
      { _id: req.params.id }
    )
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
