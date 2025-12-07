import RecipeCard from "../recipe-card/RecipeCard";
import useRequest from "../../hooks/useRequest";

export default function Catalog() {
    const { data: recipes, setData, request } = useRequest('/data/recipes?sortBy=_createdOn%20desc', []);

    const filterChangeHandler = async (e) => {
        const filter = e.target.value;

        try {
            if (filter === "recent") {
                const recent = await request("/data/recipes?sortBy=_createdOn%20desc");
                setData(recent);
                return;
            } 

            const result = await request("/data/recipes");

            const modifiedRecipes = Object.values(result).map(recipe => ({
                ...recipe,
                likesCount: recipe.likes ? recipe.likes.length : 0
            }));            

            modifiedRecipes.sort((a, b) => b.likesCount - a.likesCount);

            setData(modifiedRecipes);   
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Welcome to FlavorBook</h1>

                {/* Dropdown Filter */}
                <select
                    onChange={filterChangeHandler}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    <option value="recent">Most Recent</option>
                    <option value="likes">Most Likes</option>
                </select>
            </div>

            <p className="text-gray-700 mb-8">
                Discover delicious recipes and start cooking today!
            </p>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {recipes.length > 0
                    ?
                    (recipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />))
                    : <p className="col-span-full text-center text-gray-500 text-lg py-10">
                        No recipes yet
                    </p>
                }
            </div>
        </div>
    );
}