import RecipeCard from "../recipe-card/RecipeCard";
import useRequest from "../../hooks/useRequest";

export default function Home() {
    const { data: latestRecipes } = useRequest('/data/recipes?sortBy=_createdOn%20desc&pageSize=3', []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to FlavorBook</h1>
            <p className="text-gray-700 mb-8">
                Discover our latest delicious recipes and start cooking today!
            </p>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {latestRecipes.length > 0
                    ?
                    (latestRecipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />))
                    : <p className="col-span-full text-center text-gray-500 text-lg py-10">
                        No recipes yet
                    </p>
                }
            </div>
        </div>
    );
}