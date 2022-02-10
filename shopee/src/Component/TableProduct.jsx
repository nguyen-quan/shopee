import {useEffect, useState} from "react";
import axios from 'axios'

export const TableProduct = ({setSelectedProduct}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        try{
            async function fetchData () {
                let res = await axios.get('http://localhost:8080/api/products')
                let data = res.data.data
                setProductData(data)
                setIsLoading(false)
            }
            fetchData()
        }catch(e){
            console.log(e)
        }
    },[])


    function editProduct(product) {
        setSelectedProduct(product);
    }

    async function deleteProduct(id, employee_name) {
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Are you sure want to delete: " + employee_name + "?")) {
                await axios.delete(`http://localhost:8080/api/delete-product/${id}`)
            }
        } catch (e) {
            console.log(e)
        }
    }


    

    return (
        <div className="shadow p-3 mt-4 bg-white">
            <div className="alert alert-primary fs-6 fw-bold" role="alert">
                Tất cả sản phẩm 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-input mb-4 mt-2">
                        <input
                            className="text-input"
                            type="text"
                            placeholder=" "
                            // value={searchValue}
                            // onInput={event => searchTable(event.target.value)}
                        />
                        <label htmlFor="">Search Product</label>
                    </div>
                </div>
            </div>
            <div className="table-product">
                <table className="table table-bordered align-middle">
                    <thead>
                    <tr align="center">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        isLoading ?
                            <tr className="text-center mt-4 fs-1 loading">
                                <td colSpan="5">
                                    <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr> :
                                productData.map((value,index) => {
                                    return (
                                        <tr key={index}>
                                        <td>{value.name}</td>
                                        <td><img src={value.image} alt=""/></td>
                                        <td>{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                                        <td>{value.description}</td>
                                        <td>
                                            <button onClick={() => editProduct(value)}><i className="far fa-edit"></i>
                                            </button>
                                            <button onClick={() => deleteProduct(value.id)}><i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}