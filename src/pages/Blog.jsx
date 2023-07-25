import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { error, data, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error...</p>;

    const handleChange = (e) => {
        const filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };
    return (
        <>
            <h1>Blog</h1>

            <div className="form-floating my-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Búsqueda"
                    id="floatingInput"
                    name="filter"
                    value={searchParams.get("filter") || ""}
                    onChange={handleChange}
                />
                <label htmlFor="floatingInput">Búsqueda</label>
            </div>

            <ul className="list-group">
                {data
                    .filter((item) => {
                        const filter = searchParams.get("filter");
                        const name = item.title.toLowerCase();
                        if (!filter) {
                            return true;
                        } else {
                            return name.startsWith(filter.toLowerCase());
                        }
                    })
                    .map((item) => (
                        <Link
                            className="list-group-item"
                            key={item.id}
                            to={`/blog/${item.id}`}
                        >
                            {item.id} - {item.title}
                        </Link>
                    ))}
            </ul>
        </>
    );
};

export default Blog;
