import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error fetching data");
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error.message);
            setData([]);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};
