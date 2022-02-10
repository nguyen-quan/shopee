import pool from '../config/connectDB'
import multer from 'multer'

let getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs')
}

let handleUploadFile = async (req, res) => {

    if (req.fileValidationError) {

        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    // });
}


let handleUploadMultipleFiles = async (req, res) => {

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select an image to upload');
    }

    let result = "You have uploaded these images: <hr />";
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload">Upload more images</a>';
    res.send(result);

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let getAllProduct = async(req,res) => {
    const [rows, fields] = await pool.query('SELECT * FROM product')
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getOneProduct = async(req,res) => {
    let productId = req.params.id
    let [product] = await pool.execute(`select * from product where id = ?`,[productId])

    return res.status(200).json({
        message: 'ok',
        data: product
    })
}

let createProduct = async(req, res) => {
    let {name,image,price,description} = req.body
    if (!name || !image || !price || ! description) {
        return res.status(200).json({
            message: 'nhập thiếu dữ liệu'
        })
    }
    await pool.execute('insert into product(name,image,price,description) value (?,?,?,?)',
    [name,image,price,description])

    return res.status(200).json({
        message: 'ok'
    })
}

let updateProduct = async(req, res) => {
    let { name,image,price,description,id } = req.body;

    if (!name || !image || !price || ! description || !id) {
        return res.status(200).json({
            message: 'nhập thiếu dữ liệu'
        })
    }

    await pool.execute('update product set name= ?, image = ? , price = ? , description= ? where id = ?',
        [name,image,price,description,id])

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteProduct = async(req, res) => {
    let productId = req.params.id

    if (!productId) {
        return res.status(200).json({
            message: 'nhập thiếu dữ liệu'
        })
    }
    await pool.execute(`delete from product where id = ?`,[productId])

    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllProduct,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getUploadFilePage,
    handleUploadFile,
    handleUploadMultipleFiles
}