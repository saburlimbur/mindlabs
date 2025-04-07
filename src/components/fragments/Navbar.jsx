import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";
import { useAuth, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <header className="flex justify-between p-3 w-full">
      <div className="flex items-center">
        <Link
          className="lg:text-3xl md:text-2xl text-xl font-extrabold text-black"
          to={"/"}
        >
          Mindlabs
        </Link>
      </div>

      <nav className="flex items-center gap-20 justify-center">
        <NavigationMenu className="flex items-center gap-2">
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <Link to={"/questions"} legacyBehavior passHref>
                <NavigationMenuLink>Question</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/category"} legacyBehavior passHref>
                <NavigationMenuLink>Categories</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          {!isSignedIn && (
            <>
              <Link
                to={"/signup"}
                className="border border-gray-900 hover:bg-gray-50 cursor-pointer transition-all ease-in text-black py-2.5 px-5 rounded-md"
              >
                Register
              </Link>

              <Link
                to={"/login"}
                className="bg-gray-900 hover:bg-gray-700 cursor-pointer transition-all ease-in text-white py-3 px-6 rounded-md"
              >
                Login
              </Link>
            </>
          )}

          {isSignedIn && <UserButton />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
