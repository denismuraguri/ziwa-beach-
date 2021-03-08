import mongoose from 'mongoose';
const bookSchema = new mongoose({
        bookingItems: [
            {
                name: {type: String, required: true},
                image:{ type: String, required: true},
                type:{ type: String, required: true},
                price:{ type: Number, required: true},
                room:{ type: mongoose.Schema.Types.ObjectId,
                        ref: 'Room',
                        required: true,
                    },
            }
        ],
    bookingAddress: {
        fullName: { type: String, required: true},
        address: { type: String, required: true},
        city: { type: String, required: true},
        postalCode: { type: String, required: true},
        country: { type: String, required: true},
    },
    paymentMethod: { type: String, required: true},
    roomsPrice: { type: String, required: true},
    taxPrice: { type: String, required: true},
    totalPrice: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    isPaid: {type: Boolean, default: false},
    /**isBooked: {type: Boolean, default: false},
    BookedAt: {type: Date},**/

},
{
    timestamps: true,
  }
)

const Book = mongoose.model('Book', bookSchema);
export default Book;