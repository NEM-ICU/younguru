import mongoose from "mongoose";

const SuperuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  editors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

const Superuser = mongoose.model("Superuser", SuperuserSchema);

module.exports = Superuser;
