import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url:any){

    const[error, setError]=useState(String);
    const[loading, setLoading]=useState(true);
    const[data, setData]=useState([]);

    const fetchData=async()=>{
        try {
            const{data:response} = await axios.get(url);
            setData(response);
            setLoading(false);
        } catch (ex) {
            let errorMessage = "Failed to do something exceptional";
            if (ex instanceof Error) {
                errorMessage = ex.message;
              }
            setError(errorMessage);
            setLoading(false);
        }
        // catch(err:any){
        //     setError(err.messgae)
        // }
    };

    useEffect(()=>{
        fetchData();
    }, []);

    return{error,loading,data};

}

export default useFetch;