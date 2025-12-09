import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { isAuthenticated } = useContext(UserContext);

    return (
         <header className="bg-gray-100 shadow-md relative z-10">
            <div className="px-8 sm:px-12 lg:px-20">
                <div className="flex items-center justify-between py-4">

                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-3xl text-orange-500 hover:text-orange-600 transition-colors font-bold"
                            style={{ fontFamily: "'Pacifico', cursive" }}
                        >
                            FlavorBook
                        </Link>
                    </div>

                    <nav>
                        <ul className="flex space-x-6 text-gray-700 font-medium">
                            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                            <li><Link to="/recipes" className="hover:text-blue-600">Catalog</Link></li>

                            {isAuthenticated
                                ? <>
                                    <li><Link to="/recipes/create" className="hover:text-blue-600">Create</Link></li>
                                    <li><Link to="/logout" className="px-4 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition">Logout</Link></li>
                                </>
                                : <>
                                    <li><Link to="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">Login</Link></li>
                                    <li><Link to="/register" className="px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Register</Link></li>
                                </>
                            }
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}