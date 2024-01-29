import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import firstimg from "../assets/firstimg.jpg"

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <img src={firstimg} alt="" />
            <br />
            <Link to="/res">Go to the Restaurant Page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
