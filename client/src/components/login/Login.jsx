import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const loginSubmitHandler = async (values) => {
        const { email, password } = values;

         if (!email || !password) {
            return alert('Email and password are required!');
        }

        try {
            await loginHandler(email, password);
            
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    }

    const { formAction, changeHandler, values } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

                <form action={formAction}>
                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            values={values.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={changeHandler}
                            values={values.password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Not registered link */}
                    <p className="text-center text-sm text-gray-600 mb-4">
                        Not registered?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Create an account
                        </Link>
                    </p>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}