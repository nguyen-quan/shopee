import axios from "axios";

export async function fetchProduct() {
    try {
        let {data} = await axios.get('http://localhost:8080/api/products')
        return data
    } catch (e) {
        console.log(e)
    }
}