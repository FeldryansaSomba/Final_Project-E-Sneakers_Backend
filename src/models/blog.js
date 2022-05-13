//struktur database yang akan kita buat (biasa disebut sebagai model)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title:{
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    image:{
          //yang disimpan didalam mongodb hanya url/path image
          type: String,
          required: true, // artinya wajib ada 
    },

    author:{
        type: Object,
        required: true
    }
},  {
    timestamps: true
})

module.exports = mongoose.model('BlogPost', BlogPost)