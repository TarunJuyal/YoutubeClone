const express = require("express");
const { Subscriber } = require("../models/subscriber");
const subscriberRoutes = express.Router();

subscriberRoutes.post("/subscriberNumber", (req, res) => {
  Subscriber.find({ userTo: req.body.userTo }).exec((err, subscriber) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, subscriberNumber: subscriber.length });
  });
});

subscriberRoutes.post("/subscribed", (req, res) => {
  Subscriber.find({
    userTo: req.body.userTo,
    userFrom: req.body.userFrom,
  }).exec((err, subscribed) => {
    if (err) return res.status(400).json({ success: false, err });
    let result = false;
    if (subscribed.length !== 0) {
      result = true;
    }
    return res.status(200).json({ success: true, subscribed: result });
  });
});

subscriberRoutes.post("/subscribe", (req, res) => {
  const subscribe = new Subscriber(req.body);
  subscribe.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

subscriberRoutes.post("/UnSubscribe", (req, res) => {
  Subscriber.findOneAndDelete({
    userTo: req.body.userTo,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, doc });
  });
});

module.exports = subscriberRoutes;
