import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div className="not-found-div">
            <h1 className="not-found-title">404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Return to home page</Link>
        </div>
    );
}