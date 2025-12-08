import { Link, useNavigate, useParams } from "react-router";
import useRequest from "../../hooks/useRequest";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Details() {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useContext(UserContext);

    const { data: recipe, request } = useRequest(`/data/recipes/${recipeId}`, []);

    const deleteRecipeHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete this game: ${recipe.name}`);

        if (!isConfirmed) {
            return;
        }

        try {
            await request(`/data/recipes/${recipeId}`, 'DELETE');
            navigate('/recipes');
        } catch (err) {
            alert('Unable to delete recipe: ', err.message);
        }
    }

    return (
        <div className="relative min-h-[calc(100vh-8rem)] flex justify-center items-center bg-gray-50">
            <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl w-full overflow-hidden text-base">
                {/* Image */}
                <img
                    src={recipe.img}
                    alt={recipe.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />

                {/* Name + Description */}
                <h1 className="text-3xl font-bold text-center mb-2">{recipe.name}</h1>
                <p className="text-gray-700 text-center mb-6 max-w-xl mx-auto">
                    {recipe.description}
                </p>

                <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6">
                    {/* Ingredients Box */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-center text-lg mb-3">Ingredients</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {recipe.ingredients?.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Steps Box */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-center text-lg mb-3">
                            Preparation Steps
                        </h3>
                        <ol className="list-decimal list-inside space-y-1">
                            {recipe.steps?.map((s, idx) => (
                                <li key={idx}>{s}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-3 mt-6">
                    {isAuthenticated && user._id === recipe._ownerId
                    ? <>
                        <Link
                            to={`/recipes/${recipeId}/edit`}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                        >
                            Edit
                        </Link>
                        <button onClick={deleteRecipeHandler} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm">
                            Delete
                        </button>
                    </>
                    :
                    <></>
                    }
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                        Like ({recipe.likes?.length || 0})
                    </button>
                </div>
            </div>
        </div>
    );
}