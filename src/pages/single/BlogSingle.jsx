import { useParams, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const BlogSingle = () => {
    const params = useParams();
    

    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error...</p>;
    return (
        <>
            <h3>
                {data.id} - {data.title}
            </h3>
            <p>{data.body}</p>
        </>
    );
};

export default BlogSingle;
