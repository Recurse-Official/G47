const mongoose = require("mongoose");

// Define the schema
const organizationSchema = new mongoose.Schema({
  organizationDetails: {
    orgName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  locationDetails: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    capacity: { type: Number, required: true },
    typicalTimings: { type: String, required: true }
  },
  foodAndSafety: {
    foodTypes: { type: [String], required: true },
    licenses: { type: [String], required: true }
  },
  accountDetails: {
    password: { type: String, required: true }
  }
});

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;