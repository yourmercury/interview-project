/**
 * CreateOrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/
 * 
 * 
 */

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkCookie = function (req, res) {
    let status = null
    status = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET || sails.config.jwtSecret);
    if (!status) {
        return false
    } else {
        return status
    }
}

module.exports = {
    createOrder: function (req, res) {
        let status = checkCookie(req, res);
        if (!status) {
            res.json({ error: "you are not logged in" });
        }

        Order.createOrder(req.body, status.sub)
            .then(order => {
                res.status(200).json(order);
            }).catch(err => {
                res.status(404).json({ err: err });
            })
    },

    viewOrders: function (req, res) {
        let status = checkCookie(req, res);
        if (!status) {
            res.json({ error: "you are not logged in" });
        }

        //console.log(status)
        Order.getOrders(status.sub)
            .then(order => {
                res.status(200).json(order);
            });
    },

    editOrder: function (req, res) {
        let status = checkCookie(req, res);
        if (!status) {
            res.json({ error: "you are not logged in" });
        }
        Order.editOrder(req.body)
            .then(order => {
                res.status(200).json(order);
            }).catch(err => {
                res.json({ err: err })
            })
    }
};

