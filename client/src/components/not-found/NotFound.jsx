import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[80vh] bg-gray-50 text-center">
            <h1 className="text-8xl font-bold mb-4">404</h1>
            <p className="text-4xl mb-6">Page Not Found</p>
            <Link to="/" className="text-blue-600 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
}
