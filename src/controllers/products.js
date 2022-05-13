const { body } = require('express-validator');
const products = require('../models/products')


exports.postProduct = async (req, res, next) =>{

    const harga  = req.body.harga;
    const nama = req.body.nama;
    const deskripsi = req.body.deskripsi;
    const gambar = req.file.path;

      const Posting = new products({
          harga: harga,
          nama: nama,
          deskripsi: deskripsi,
          gambar: gambar,
      })

      Posting.save() // menyimpan data ke database
      .then(
          result =>{
              res.status(201).json({
                  message: "Post Success",
                  data: result
                })
          }
      )
      .catch( err =>{
          console.log('error:', err)
      })
    }



exports.getProducts = async (req,res)=>{
    res.json('get products')
}