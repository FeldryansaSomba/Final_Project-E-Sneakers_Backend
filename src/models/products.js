const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//saya akan membuat model baru
const products = new Schema({
    // atribut id otomatis di buatkan
    harga:{
        type: String, 
        required: true,
    },
    nama:{
        type: String, 
        required: true,
    },
    deskripsi:{
        type: String, 
        required: true,
    },
    gambar:{
        type: String, 
        required: true,
    },
},{
    timestamps: true
    // atribut createdAt dan updateAt otomatis ditambahkan jika menuliskan timestamp
})

module.exports = mongoose.model('products', products)
//keterangan dari line diatas = mongoose.model('namaModelnya', variableModelnya)