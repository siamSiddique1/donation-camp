import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <h1>Oops!!!</h1>
            <Link to={"/"}>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;