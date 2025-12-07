export default function RecipeCard({
    name,
    description,
    img,

}) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
                src={img}
                alt={name}
                className="w-full h-64 object-cover"
            />

            <div className="p-4 min-h-24">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>

                <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm truncate max-w-[80%]">{description}</p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-1 rounded-md transition ml-4 shrink-0">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}