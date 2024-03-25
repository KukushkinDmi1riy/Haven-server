import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;

const adSchema = new Schema(
  {
    photos: [{}],
    price: {
      type: Number,
      maxLength: 255,
    },
    address: {
      type: String,
      required: true,
      maxLength: 255,
    },
    bedrooms: Number,
    bathrooms: Number,
    landsize: String,
    carpark: Number,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [85.323959, 27.717245],
      },
    },
    title: {
      type: String,
      maxLength: 255,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
    description: {},
    postedBy: { type: ObjectId, ref: "User" },
    sold: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    googleMap: {},
    type: {
      type: String,
      default: "Other", // House, Land, Appartment
    },
    action: {
      type: String,
      default: "Sell",
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

adSchema.index({ location: "2dsphere" });
export default mongoose.model("Ad", adSchema);

