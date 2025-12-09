import { Link } from "react-router";

export default function RecipeCard({
    name,
    description,
    img,
    _id,
}) {
    return (
        <div className="bg-white shadow-md rounded-lg border border-gray-300 overflow-hidden">
            <img
                src={img}
                alt={name}
                className="w-full h-64 object-cover"
            />

            <div className="p-4 min-h-24">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>

                <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm truncate max-w-[80%]">{description}</p>

                    <Link to={`/recipes/${_id}/details`} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-1 rounded-md transition ml-4 shrink-0">View Recipe</Link>
                </div>
            </div>
        </div>
    );
}