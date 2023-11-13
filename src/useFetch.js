// Custom hook useFetch
import { useState, useEffect } from "react";

const useFetch = (url) => {
    //useState Hook
    //const [something(name of const), setSomething(name of function) = useState(initial value)]
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;