import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "DONOR" | "RECIPIENT" | "NGO" | "PHARMACIST" | "ADMIN";
  avatar?: string;
  verificationStatus: "PENDING" | "VERIFIED" | "REJECTED";
  reputationScore: number;
  bio?: string;
  location?: {
    type: "Point";
    coordinates: [number, number];
    address: string;
  };
  organizationData?: {
    orgName: string;
    licenseNumber: string;
    website?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["DONOR", "RECIPIENT", "NGO", "PHARMACIST", "ADMIN"],
      default: "DONOR",
    },
    avatar: { type: String },
    verificationStatus: {
      type: String,
      enum: ["PENDING", "VERIFIED", "REJECTED"],
      default: "PENDING",
    },
    reputationScore: { type: Number, default: 0 },
    bio: { type: String },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number] },
      address: { type: String },
    },
    organizationData: {
      orgName: { type: String },
      licenseNumber: { type: String },
      website: { type: String },
    },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1 });
UserSchema.index({ location: "2dsphere" });

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
