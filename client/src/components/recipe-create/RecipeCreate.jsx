export default function RecipeCreate() {
    return (
        <div className="flex justify-center items-center h-full min-h-[calc(100vh-160px)] bg-gray-50">
            <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Create a New Recipe</h2>

                <form>
                    {/* Recipe Name */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Recipe Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="e.g., Spaghetti Carbonara"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Image URL</label>
                        <input
                            type="text"
                            name="img"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Paste an image link"
                            required
                        />
                    </div>

                    {/* Ingredients */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Ingredients</label>
                        <textarea
                            name="ingredients"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="List the ingredients..."
                            required
                        ></textarea>
                    </div>

                    {/* Steps */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm mb-1">Steps</label>
                        <textarea
                            name="steps"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Describe the preparation steps..."
                            required
                        ></textarea>
                    </div>

                    {/* Create Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg 
                                   hover:bg-blue-700 transition"
                    >
                        Create Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}
