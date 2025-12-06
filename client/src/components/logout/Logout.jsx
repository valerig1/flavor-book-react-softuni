import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import { useNavigate } from "react-router";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(UserContext);

    logoutHandler()
        .then(() => navigate('/'))
        .catch(() => {
            alert('Problem with logout!');
            navigate('/');
        })
        
    return null;
}