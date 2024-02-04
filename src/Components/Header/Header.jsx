import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen((prev) => !prev);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-amber-200">
      <Container>
        <nav className="flex">
          <div className="mr-4 my-auto">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <div className="ml-auto hidden md:block">
            <ul className="flex ml-auto justify-around gap-3">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="inline-block px-6 py-2 duration-200 hover:bg-amber-300 hover:text-white rounded-full font-semibold "
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li className="font-semibold">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>

          <div className="block md:hidden ml-auto">
            <button onClick={handleSubmit}>
              {open ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </nav>
        
        {open && (
          <div>
            <ul className=" ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li
                    key={item.name}
                    className="text-center border-b border-black"
                  >
                    <button
                      className="inline-block px-6 py-2 duration-200 hover:text-white rounded-full font-semibold "
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li className="font-semibold text-center">
                  <LogoutBtn className={"hover:bg-transparent"} />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
export default Header;
