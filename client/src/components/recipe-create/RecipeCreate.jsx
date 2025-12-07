import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";

export default function RecipeCreate() {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createRecipeSubmitHandler = async (values) => {
        const { name, description, img, ingredients, steps } = values;

        if (!name || !description || !img || !ingredients || !steps) {
            return alert('All fields are required!');
        }

        const ingredientsArr = ingredients
            .split(',')
            .map(item => item.trim())
            .filter(i => i.length > 0);
        const stepsArr = steps
            .split(',')
            .map(item => item.trim())
            .filter(i => i.length > 0);

        try {
            await request('/data/recipes', 'POST', { name, description, img, likes: [], ingredients: ingredientsArr, steps: stepsArr });
            navigate('/recipes');
        } catch (err) {
            alert(err.message);
        }
    }

    const { formAction, changeHandler, values } = useForm(createRecipeSubmitHandler, {
        name: '',
        description: '',
        img: '',
        ingredients: '',
        steps: '',
    })

    return (
        <div className="flex justify-center items-center min-h-screen py-12 bg-gray-50">
            <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Create a New Recipe</h2>

                <form action={formAction}>
                    {/* Recipe Name */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Recipe Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            value={values.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="e.g., Spaghetti Carbonara"
                            required
                        />
                    </div>

                    {/* Short Description */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Short Description</label>
                        <input
                            type="text"
                            name="description"
                            onChange={changeHandler}
                            value={values.description}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="A brief description of your recipe"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Image URL</label>
                        <input
                            type="text"
                            name="img"
                            onChange={changeHandler}
                            value={values.img}
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
                            onChange={changeHandler}
                            value={values.ingredients}
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
                            onChange={changeHandler}
                            value={values.steps}
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
