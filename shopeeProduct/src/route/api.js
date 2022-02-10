import express from "express"
import APIController from '../controllers/APIController'

let router = express.Router()

let initIPARoutes = (app) => {
    router.get('/products', APIController.getAllProduct) //read
    router.get('/product/:id', APIController.getOneProduct)
    router.post('/create-product', APIController.createProduct) //create
    router.put('/update-product', APIController.updateProduct) //update
    router.delete('/delete-product/:id', APIController.deleteProduct) //delete

    return app.use("/api/", router)
}

module.exports = initIPARoutes