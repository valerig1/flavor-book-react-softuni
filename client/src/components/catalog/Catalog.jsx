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

            const recipesResult = await request("/data/recipes");

            const likesResult = await request("/data/likes");

            // Count likes per recipe
            const likesCountMap = likesResult.reduce((acc, like) => {
                acc[like.recipeId] = (acc[like.recipeId] || 0) + 1;
                return acc;
            }, {});

            const modifiedRecipes = recipesResult.map(recipe => ({
                ...recipe,
                likesCount: likesCountMap[recipe._id] || 0
            }));

            modifiedRecipes.sort((a, b) => b.likesCount - a.likesCount);

            setData(modifiedRecipes);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="px-12 py-8">
            <div className="text-center mb-2">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Recipe Catalog</h1>
                <p className="text-gray-600 text-lg">
                    Browse through our collection of delicious recipes and find your next favorite dish!
                </p>
            </div>

            <div className="flex justify-end mb-4">
                <select
                    onChange={filterChangeHandler}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    <option value="recent">Most Recent</option>
                    <option value="likes">Most Likes</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes?.length > 0
                    ? recipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />)
                    : <p className="col-span-full text-center text-gray-500 text-lg py-10">
                        No recipes found
                    </p>
                }
            </div>
        </div>
    );
}