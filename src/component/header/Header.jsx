
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../container/Container";
import LogoutButton from "./LogoutButton";


const Header = () => {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: "true"
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Post",
            slug: "/all-post",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ]
    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to={"/"}>
                            <h2>Logo</h2>
                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => (
                            item.active ? (
                                <li className="bg-black rounded px-4 py-2 text-white ml-2" key={item.name}>
                                    <button onClick={() => {navigate(item.slug) }} >{item.name}</button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <LogoutButton />
                        )}

                    </ul>
                </nav>
            </Container>

        </header>
    )
}
export default Header;
