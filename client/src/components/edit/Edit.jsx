import { useNavigate, useParams } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";
import { useEffect, useState } from "react";
import { validateRecipe } from "../../utils/validators";
import { parseList } from "../../utils/recipeHelper";

function validate(values) {
    return validateRecipe(values);
}

export default function Edit() {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const { data: recipe, request } = useRequest(`/data/recipes/${recipeId}`, {});

    const editRecipeSubmitHandler = async (values) => {
        const validationErrors = validate(values);        
        setErrors(validationErrors);        

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const payload = {
            ...values,
            ingredients: parseList(values.ingredients),
            steps: parseList(values.steps),
        };

        try {
            await request(`/data/recipes/${recipeId}`, 'PUT', payload);

            navigate(`/recipes/${recipeId}/details`);
        } catch (err) {
            alert('Something went wrong while editing the recipe. Please try again later.');
        }
    }

    const { formAction, changeHandler, values, setValues } = useForm(editRecipeSubmitHandler, {
        name: '',
        description: '',
        img: '',
        ingredients: '',
        steps: '',
    })

    useEffect(() => {
        if (recipe) {
            setValues({
                name: recipe.name || '',
                description: recipe.description || '',
                img: recipe.img || '',
                ingredients: recipe.ingredients?.join(', ') || '',
                steps: recipe.steps?.join(', ') || '',
            });
        }
    }, [recipe, setValues]);

    return (
        <div className="flex justify-center items-center min-h-screen py-12 bg-gray-50">
            <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-8">Edit Recipe</h2>

                <form action={formAction}>
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
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

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
                        />
                        {errors.description && (
                            <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                        )}
                    </div>

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
                        />
                        {errors.img && (
                            <p className="text-red-600 text-sm mt-1">{errors.img}</p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Ingredients</label>
                        <textarea
                            name="ingredients"
                            onChange={changeHandler}
                            value={values.ingredients}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="List the ingredients separated by comma..."
                        ></textarea>
                        {errors.ingredients && (
                            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm mb-1">Steps</label>
                        <textarea
                            name="steps"
                            onChange={changeHandler}
                            value={values.steps}
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Describe the preparation steps separated by comma..."
                        ></textarea>
                        {errors.steps && (
                            <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg 
                           hover:bg-blue-700 transition"
                    >
                        Edit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}