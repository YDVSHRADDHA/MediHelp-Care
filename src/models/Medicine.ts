import mongoose, { Schema, Document } from "mongoose";

export interface IMedicine extends Document {
  donorId: mongoose.Types.ObjectId;
  name: string;
  category: string;
  expiryDate: Date;
  quantity: string;
  images: string[];
  status: "AVAILABLE" | "PENDING_VERIFICATION" | "RESERVED" | "DONATED" | "EXPIRED";
  verificationData: {
    verifiedBy?: mongoose.Types.ObjectId;
    verifiedAt?: Date;
    condition: "SEALED" | "OPEN_BOX" | "PARTIAL";
    notes?: string;
  };
  ocrData: {
    batchNumber?: string;
    manufacturer?: string;
    extractedAt: Date;
  };
  location: {
    type: "Point";
    coordinates: [number, number];
    address: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const MedicineSchema = new Schema<IMedicine>(
  {
    donorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    quantity: { type: String, required: true },
    images: [{ type: String }],
    status: {
      type: String,
      enum: ["AVAILABLE", "PENDING_VERIFICATION", "RESERVED", "DONATED", "EXPIRED"],
      default: "PENDING_VERIFICATION",
    },
    verificationData: {
      verifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
      verifiedAt: { type: Date },
      condition: {
        type: String,
        enum: ["SEALED", "OPEN_BOX", "PARTIAL"],
        required: true,
      },
      notes: { type: String },
    },
    ocrData: {
      batchNumber: { type: String },
      manufacturer: { type: String },
      extractedAt: { type: Date, default: Date.now },
    },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true },
      address: { type: String, required: true },
    },
  },
  { timestamps: true }
);

MedicineSchema.index({ location: "2dsphere" });
MedicineSchema.index({ name: "text", category: "text" });

export default mongoose.models.Medicine || mongoose.model<IMedicine>("Medicine", MedicineSchema);
