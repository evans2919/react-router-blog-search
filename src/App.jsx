import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import LayoutPublic from "./layouts/LayoutPublic";
import PageNotFound from "./pages/PageNotFound";
import BlogSingle from "./pages/single/BlogSingle";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<Inicio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogSingle />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
