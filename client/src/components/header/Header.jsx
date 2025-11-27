import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="px-8 sm:px-12 lg:px-20">
                <div className="flex items-center justify-between py-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://dummyimage.com/40x40/000/fff&text=L"
                                className="h-10 w-10"
                                alt="FlavorBook Logo"
                            />
                            <span className="ml-2 text-xl font-semibold">FlavorBook</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-6 text-gray-700 font-medium">
                            <li><Link to="/recipes" className="hover:text-blue-600">Catalog</Link></li>
                            <li><Link to="/recipes/create" className="hover:text-blue-600">Create</Link></li>
                            <li><Link to="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">Login</Link></li>
                            <li><Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Register</Link></li>
                            <li><Link to="/logout" className="px-4 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition">Logout</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}