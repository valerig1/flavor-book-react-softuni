import { useEffect, useState } from "react";
import RecipeCard from "../recipe-card/RecipeCard";

export default function Home() {
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/recipes')
            .then(response => response.json())
            .then(result => setAllRecipes(result))
            .catch(err => {
                alert(err.message);
            })
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to FlavorBook</h1>
            <p className="text-gray-700 mb-8">
                Discover delicious recipes and start cooking today!
            </p>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {allRecipes.length > 0
                    ?
                    (allRecipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />))
                    : <p className="col-span-full text-center text-gray-500 text-lg py-10">
                        No recipes yet
                    </p>
                }
            </div>
        </div>
    );
}