const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
    name : {
      type : String,
      required : true,
    },
    owner : {
      type : String,
      required : true,
    },
    birthYear : {
      type : Number,
      required : true,
    },
    isVacsinated : {
      type : String,
      required : true,
    },
    breed : {
      type : String,
      required : true,
    },
    gender : {
      type : String,
      required : true,
    },
    likeCount : {
      type : Number,
      required : true,
    },
    location : {
      type : Array,
      required : true,
    },
    imageUrl: {
      type: String,
      required: true,
    },

},{collection : "cats"});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;