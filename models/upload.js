const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      allowNull: true,
    },
    ext: {
      type: String,
      allowNull: true,
    },
    mimeType: {
      type: String,
      allowNull: true,
    },
    size: {
      type: String,
      allowNull: true,
    },
    fileUrl: {
      type: String,
      unique: true,
    },
    thumbnailUrl: {
      type: String,
      allowNull: true,
      unique: true,
    },
    key: {
      type: String,
      allowNull: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

exports.Upload = mongoose.model("Upload", uploadSchema, "uploads");
