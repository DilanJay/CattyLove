const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    userId : {
      type : String,
      required : true,
    },
    catId : {
      type : String,
      required : true,
    },
    likedOn : {
        type : Date,
        get: () => new Date(Date.now),
        set: () => new Date(Date.now),
    }
});

//const Like = mongoose.model('Like', likeSchema);

module.exports = likeSchema;


// likedOn : {
//   type : Date,
//   require : true,
//   get: v => new Date(v),
//   set: v => new Date(v),
// }