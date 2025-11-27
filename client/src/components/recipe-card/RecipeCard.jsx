export default function RecipeCard() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
                src=""
                alt="Spaghetti Carbonara"
                className="w-full h-48 object-cover"
            />

            <div className="p-4 min-h-24">
                <h2 className="text-xl font-semibold mb-2">Spaghetti Carbonara</h2>

                <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">
                        A classic Italian pasta dish with a rich meat sauce.
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-1 rounded-md transition ml-4 shrink-0">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}