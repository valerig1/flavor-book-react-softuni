import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";

export default function OwnerRoute() {
    const { user, isAuthenticated } = useContext(UserContext);
    const { recipeId } = useParams();
    const { request } = useRequest();
    const [isOwner, setIsOwner] = useState(null);

    useEffect(() => {
        if (!isAuthenticated) {
            setIsOwner(false);
            return;
        }

        async function checkOwner() {
            try {
                const recipe = await request(`/data/recipes/${recipeId}`);
                setIsOwner(recipe._ownerId === user._id);
            } catch (err) {
                console.error(err);
                setIsOwner(false);
            }
        }

        checkOwner();
    }, [recipeId, isAuthenticated, user, request]);

    if (isOwner === null) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated || !isOwner) {
        return <Navigate to={`/recipes/${recipeId}/details`} replace />;
    }

    return <Outlet />;
}
