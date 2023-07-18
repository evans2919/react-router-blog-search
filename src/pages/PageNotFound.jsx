import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
            <h1>404</h1>
            <Link className="btn btn-primary" to="/">Volver al inicio</Link>
        </>
    );
};

export default PageNotFound;
