import {useEffect, useState} from "react"
import axios from 'axios'
import {useDispatch} from "react-redux"
import {resetProduct} from "../reducers/ProductReducer"

const initState = {
    name: "",
    image: "",
    price: "",
    description: ""
}

export const AddProduct = ({selectedProduct}) => {
    const [product, setProduct] = useState(initState)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
            setIsEdit(true)
        }
    }, [selectedProduct])

    function handleInput(e) {
        let {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    function resetForm() {
        setProduct(initState)
    }

    async function addNewProduct() {
        try {
            await axios.post('http://localhost:8080/api/create-product', {
                name: product.name,
                image: product.image,
                price: product.price,
                description : product.description
            })
            resetForm()
        } catch (e) {
            console.log(e)
        }
    }

    async function editProduct(id) {
        try {
            await axios.put(`http://localhost:8080/api/update-product?id=${id}`, {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                description : product.description
            })
            console.log(product)
            resetForm()
            setIsEdit(false)
            // callback()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="shadow p-3 mt-4 bg-white">
            <div className="alert alert-primary fs-6 fw-bold" role="alert">
            {/* Thêm sản phẩm */}
                {isEdit ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}
            </div>
            <div className="form-input mb-4 mt-4">
                <input
                    className="text-input"
                    type="text"
                    placeholder=" "
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                />
                <label htmlFor="">Name</label>
            </div>
            <div className="form-input mb-4 mt-4">
            <input
                    className="text-input"
                    type="text"
                    placeholder=" "
                    name="image"
                    value={product.image}
                    onChange={handleInput}
                />
                <label htmlFor="">Image</label>
            </div>
            <div className="form-input mb-4">
                <input
                    className="text-input"
                    type="number"
                    placeholder=" "
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                />
                <label htmlFor="">Price</label>
            </div>
            <div className="form-input mb-2">
            <textarea
                className="text-input"
                placeholder=" "
                name="description"
                value={product.description}
                onChange={handleInput}

            />
                <label htmlFor="">Description</label>
            </div>
            <div className="form-input">
                {
                    isEdit ? <button onClick={() => editProduct(selectedProduct.id, dispatch(resetProduct()))}>Edit Product</button> :
                             <button onClick={addNewProduct}>Save Product</button>
                }
            </div>
        </div>
    )
}