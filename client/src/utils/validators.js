export function validateRecipe(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Recipe name is required!';
    }

    if (!values.description.trim()) {
        errors.description = 'Short description is required!';
    }

    if (!values.img.trim()) {
        errors.img = 'Image URL is required!';
    }

    if (!values.ingredients.trim()) {
        errors.ingredients = 'Recipe ingredients are required!';
    }

    if (!values.steps.trim()) {
        errors.steps = 'Recipe preparation steps are required!';
    }

    return errors;
}

export function validateUser(values) {
    let errors = {};

    if (!values.email.trim()) {
        errors.email = 'Email is required!';
    }

    if (!values.password.trim()) {
        errors.password = "Password is required!";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters!";
    }

    if ("confirmPassword" in values) { 
        if (!values.confirmPassword?.trim()) {
            errors.confirmPassword = "Confirm password is required!";
        } else if (values.confirmPassword.length < 6) {
            errors.confirmPassword = "Confirm Password must be at least 6 characters!";
        }

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match!";
        }
    }

    return errors;
}