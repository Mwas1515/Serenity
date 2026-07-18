import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, User, LogOut, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/resources", label: "Resources" },
  { to: "/assessment", label: "Self Check-In" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser, logout, isAdmin } = useAuth();

  const isAuthenticated = !!currentUser;

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-teal font-semibold"
        : "text-ink/70 hover:text-teal"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-sage-light/60 bg-cream/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-3xl font-semibold text-teal"
        >
          <span>〜</span>
          Serenity.
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <NavLink
            to="/booking"
            className="rounded-full bg-teal px-5 py-2 text-sm font-medium text-cream transition hover:bg-teal-light"
          >
            Book a Session
          </NavLink>

          {isAuthenticated ? (
            <div className="flex items-center gap-4 border-l border-sage-light/60 pl-4">

              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-teal hover:bg-gold-light transition"
                >
                  <ShieldAlert size={14} />
                  Admin
                </Link>
              )}

              <div className="flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-light text-teal">
                  <User size={18} />
                </div>

                <span className="hidden lg:block text-sm font-medium text-teal">
                  {currentUser.displayName || currentUser.email}
                </span>

              </div>

              <Button
                onClick={logout}
                className="rounded-full bg-gold px-4 text-teal-dark hover:bg-gold-light"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>

            </div>
          ) : (
            <div className="flex items-center gap-3 border-l border-sage-light/60 pl-4">

              <NavLink
                to="/login"
                className="text-sm font-medium text-teal transition hover:text-gold"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-teal-dark transition hover:bg-gold-light"
              >
                Sign Up
              </NavLink>

            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-sage-light/60 bg-cream px-4 py-4 flex flex-col gap-2">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-teal px-4 py-2 text-center text-sm font-medium text-cream hover:bg-teal-light"
          >
            Book a Session
          </NavLink>

          <div className="mt-4 border-t border-sage-light/60 pt-4">

            {isAuthenticated ? (
              <>

                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="mb-3 flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-sm font-medium text-teal"
                  >
                    <ShieldAlert size={16} />
                    Admin Console
                  </Link>
                )}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-teal">
                    <User size={18} />
                  </div>
                  <span className="text-sm font-medium text-teal">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full rounded-full bg-gold text-teal-dark hover:bg-gold-light"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full border border-teal py-2 text-sm font-medium text-teal hover:bg-sage-light/30"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full bg-gold py-2 text-sm font-medium text-teal-dark hover:bg-gold-light"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}