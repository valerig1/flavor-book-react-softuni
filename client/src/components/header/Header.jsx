export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="px-8 sm:px-12 lg:px-20">
                <div className="flex items-center justify-between py-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="https://dummyimage.com/40x40/000/fff&text=L"
                                className="h-10 w-10"
                                alt="FlavorBook Logo"
                            />
                            <span className="ml-2 text-xl font-semibold">FlavorBook</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-6 text-gray-700 font-medium">
                            <li><a href="#" className="hover:text-blue-600">Catalog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Create</a></li>
                            <li><a href="#" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">Login</a></li>
                            <li><a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Register</a></li>
                            <li><a href="#" className="px-4 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition">Logout</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}