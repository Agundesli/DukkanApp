import { useState } from "react";
import axios from "axios";

function usePost() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const post = async (url="", apiData:{}) => {
        try {
            setLoading(true);
            console.log("try")
            const { data: responseData } = await axios.post(url, apiData)
            setData(responseData);
            setLoading(false);

        } catch (ex) {
            console.log(data)
            console.log("cactch")
            setData(null);
            setError(true);
            setLoading(false);
        }
    };


    return { data, loading, error, post };
}

export default usePost;