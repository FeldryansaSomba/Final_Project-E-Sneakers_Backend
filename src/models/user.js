const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//saya akan membuat model baru
const user = new Schema({
    // atribut id otomatis di buatkan
    no_telepon:{
        type: String, 
        required: true,
    },
    nama:{
        type: String, 
        required: true,
    },
    kata_sandi:{
        type: String, 
        required: true,
    },
},{
    timestamps: true
    // atribut createdAt dan updateAt otomatis ditambahkan jika menuliskan timestamp
})

module.exports = mongoose.model('user', user)
//keterangan dari line diatas = mongoose.model('namaModelnya', variableModelnya)