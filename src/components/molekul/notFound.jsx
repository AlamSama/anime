import Footer from "../organisme/footer";
import Header from "../organisme/header";

function NotFound() {
    return (
        <>
        <Header />
            <div className="text-2xl font-bold flex justify-center items-center text-white min-h-[80vh]">
                <h3>404 NOT FOUND</h3>
            </div>
        <Footer />
        </>

    );
}

export default NotFound;