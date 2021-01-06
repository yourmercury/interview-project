/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'orders',

  attributes: {

    dish: {
      type: 'string',
      required: true,
      columnName: 'dish'
    },

    quantity: {
      type: 'number',
      required: true,
      columnName: 'quantity'
    },

    customerEmail: {
      type: "string",
      required: true,
      columnName: 'customer_id',
      isEmail: true
    },

    id: {
      type: "number",
      columnName: "order_id",
      autoIncrement: true,
    },

    createdAt: {
      type: 'number',
      autoCreatedAt: true
    },

    updatedAt: {
      type: 'number',
      autoUpdatedAt: true
    },

  },

  customToJSON: function(){
    return _.omit(this, ['createdAt', 'updatedAt']);
  },

  getOrders: async function(user_email) {
    let orders = await this.find({
      where: {
        customerEmail: user_email
      }
    });

    if (orders.length === 0) {
      return {msg: "Customer has no pending order"}
    }

    return orders;
  }, 



  createOrder: async function (obj, user_email) {
    //check first if the dish has already been ordered by the customer
    let order = await this.findOne({
      where: { dish: obj.dish, customerEmail: user_email }
    });

    if (order) {
      //just update the quantity to become a sum of the new order and the pending order
      let result = await this.updateOne({ id: order.id })
        .set({
          quantity: order.quantity + obj.quantity
        });
      
      return result;
    }


    //else create a new order and return the order
    order = await this.create({
      dish: obj.dish,
      quantity: obj.quantity,
      customerEmail: user_email
    }).fetch()

    return order;
  },



  editOrder: async function(obj) {
    let result = await this.update({ id: obj.id })
      .set({
        dish: obj.dish,
        quantity: obj.quantity
      });
    
    
    if (!result) {
      return {msg: "no order found"}
    }

    return result;
  }

};


