const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  OrderDate: String,
  Manager: String,
  SalesMan: String,
  Item: String,
  // groupDiscussion: String,
  // judgmentWriting: String,
  // translation: String,
  // score: Number,
});

const LeaderboardStudent = mongoose.model('LeaderboardStudent', studentSchema);
module.exports = LeaderboardStudent;
