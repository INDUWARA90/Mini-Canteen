const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }
  ],
  totalPrice: Number,
  status: {
    type: String,
    enum: ['pending', 'preparing', 'completed'],
    default: 'pending',
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
