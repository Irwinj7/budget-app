import { Link } from "react-router-dom"
import "../Components/NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/logs">Budget App</Link>
            </h1>
            <button>
                <Link to="/logs/new">New Transaction</Link>
            </button>
        </nav>
    )
}