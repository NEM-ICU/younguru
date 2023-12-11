import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
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
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
});

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
