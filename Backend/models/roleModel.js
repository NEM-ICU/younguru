import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
    enum: ["superuser", "admin", "editor", "user"],
  },
  permissions: {
    type: [String],
    required: true,
    default: [],
  },
  superuser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Superuser",
  },
});

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
