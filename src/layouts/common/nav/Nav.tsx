import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

// import { ConnectButton } from '@rainbow-me/rainbowkit';
// <X />
import { Button } from "@core/components";
import { useWindowSize } from "@core/hooks";
import { NAV_DEFAULT_LINKS, MOBILE_NAV_LINKS } from "@/data/links";

const Nav = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`py-8 text-white bg-slate-600 ${width <= 640 ? "flex-col" : "flex items-center justify-around"
        }`}
    >
      <div className="text-xl font-semibold">
        <NavLink to="/">JamiiHub</NavLink>
      </div>
      <div className={`flex space-x-4 ${width <= 640 ? "mt-4" : "mt-0"}`}>
        {width <= 640 ? (
          <Menu onClick={toggleMenu} />
        ) : (
          NAV_DEFAULT_LINKS.map((link, index) => (
            <NavLink key={index} to={link.to} className={link.className}>
              {link.text}
            </NavLink>
          ))
        )}

        {/* <ConnectButton /> */}
      </div>

      {width <= 640 && menuOpen && (
        <div className="flex flex-col space-y-2">
          {MOBILE_NAV_LINKS.map((link, index) => (
            <Button
              key={index}
              variant="default"
              size="default"
              className={link.className}
              onClick={() => {
                // Handle the click action, e.g., navigate to the link
                window.location.href = link.to;
              }}
            >
              {link.text}
            </Button>
          ))}

          {/* <ConnectButton /> */}
        </div>
      )}

    </nav>
  );
};

const NavLink = ({ to, children, className }: any) => {
  return (
    <Link
      to={to}
      className={`hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default Nav;
