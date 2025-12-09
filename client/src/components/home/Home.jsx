import RecipeCard from "../recipe-card/RecipeCard";
import useRequest from "../../hooks/useRequest";

export default function Home() {
    const { data: latestRecipes } = useRequest('/data/recipes?sortBy=_createdOn%20desc&pageSize=3', []);

    return (
        <div className="px-12 py-12">
            <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="font-sans text-gray-700">Welcome to </span>
                <span
                    className="text-orange-500"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    FlavorBook
                </span>
            </h1>
            <p className="text-gray-700 text-center text-lg sm:text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
                Discover our latest delicious recipes and start cooking today!
            </p>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestRecipes.length > 0
                    ? (latestRecipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />))
                    : <p className="col-span-full text-center text-gray-500 text-lg py-10">
                        No recipes yet
                    </p>
                }
            </div>

            <section className="py-12 bg-gray-50">
                <h2 className="text-gray-700 text-2xl font-bold text-center mb-6">Our Community in Numbers</h2>
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md border border-gray-300 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <span className="text-2xl font-bold text-orange-500">120+</span>
                            <p className="text-gray-600 mt-1">Recipes</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-orange-500">50+</span>
                            <p className="text-gray-600 mt-1">Chefs</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-orange-500">10k+</span>
                            <p className="text-gray-600 mt-1">Members</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}