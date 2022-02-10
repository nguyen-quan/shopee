import {useEffect, useState} from "react";
import axios from 'axios'

const useFetch = (url) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        // setIsLoading(true)
        try{
            async function fetchData () {
                let res = await axios.get(url)
                let data = ( res && res.data.data ) ? res.data.data : []
                setProductData(data)
                // setIsLoading(false)
            }
            fetchData()
        }catch(e){
            console.log(e)
        }
    },[])

    return (
        // isLoading,
        productData

    )
}
export default useFetch