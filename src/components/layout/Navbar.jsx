import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, User, LogOut, ShieldAlert,Sun,Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const { currentUser, logout, isAdmin } = useAuth();

  const isAuthenticated = !!currentUser;

const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
    isActive
      ? "bg-teal text-cream shadow-sm dark:bg-gold dark:text-ink"
      : "text-ink/75 hover:bg-sage-light/40 hover:text-teal dark:text-cream/80 dark:hover:bg-teal-light/20 dark:hover:text-gold"
  }`;

  return (
    <header className="sticky top-0 z-50 border-b border-sage-light/60 bg-cream/95 backdrop-blur transition-colors duration-300 dark:border-teal-light/30 dark:bg-ink/95">
      <nav className="max-w-8xl mx-auto h-16 px-4 flex items-center justify-between ">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-3xl font-semibold text-teal transition-colors duration-300 dark:text-gold"
        >
          <span>〜</span>
          Serenity.
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-sage-light/60 bg-white/40 px-2 py-1 backdrop-blur-sm dark:border-teal-light/30 dark:bg-teal-dark/40">
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
        <div className="flex items-center gap-4">
  {/* Theme Controller */}
  <Button
    type="button"
    variant="ghost"
    size="icon"
    onClick={toggleTheme}
    className="
      h-10 w-10 rounded-full
      border border-sage-light/70
      bg-cream
      text-teal
      shadow-sm
      transition-all duration-300

      hover:bg-sage-light/30
      hover:border-gold
      hover:text-gold
      hover:scale-105

      dark:bg-teal-dark
      dark:border-gold/20
      dark:text-gold
      dark:hover:bg-teal-light
      dark:hover:border-gold
      dark:hover:text-cream"
  >
    {theme === "dark" ? (
      <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
    ) : (
      <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
    )}

    <span className="sr-only">Toggle theme</span>
  </Button>
</div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <NavLink
            to="/booking"
            className="rounded-full bg-teal px-5 py-2 text-sm font-medium text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-md dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
          >
            Book a Session
          </NavLink>

          {isAuthenticated ? (
            <div className="flex items-center gap-4 border-l border-sage-light/60 pl-4 dark:border-teal-light/30">

              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-teal transition-all hover:bg-gold-light dark:bg-gold/10 dark:text-gold dark:hover:bg-gold/20"
                >
                  <ShieldAlert size={14} />
                  Admin
                </Link>
              )}

              <div className="flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-light text-teal transition-colors dark:bg-teal-light dark:text-gold">
                  <User size={18} />
                </div>

                <span className="hidden lg:block text-sm font-medium text-teal transition-colors dark:text-cream">
                  {currentUser.displayName || currentUser.email}
                </span>

              </div>

              <Button
                onClick={logout}
                className="rounded-full bg-gold px-4 text-ink transition-all duration-300 hover:bg-gold-light dark:bg-red-600 dark:text-white dark:hover:bg-red-500 justify-end"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>

            </div>
          ) : (
            <div className="flex items-center gap-3 border-l border-sage-light/60 pl-4">

              <NavLink
                to="/login"
                className="text-sm font-medium text-teal transition-colors hover:text-gold dark:text-cream dark:hover:text-gold"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-light dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
              >
                Sign Up
              </NavLink>

            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal dark:text-cream/80 dark:hover:text-gold "
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-2 border-t border-sage-light/60 bg-cream px-4 py-4 transition-colors duration-300 dark:border-teal-light/30 dark:bg-ink">

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
            className="mt-2 rounded-full bg-teal px-4 py-2 text-center text-sm font-medium text-cream transition-all hover:bg-teal-light dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
          >
            Book a Session
          </NavLink>

          <div className="mt-4 border-t border-sage-light/60 pt-4 dark:border-teal-light/30">

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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-teal dark:bg-teal-light dark:text-gold">
                    <User size={18} />
                  </div>
                  <span className="text-sm font-medium text-teal dark:text-cream">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full rounded-full bg-gold text-ink transition-all hover:bg-gold-light dark:bg-red-600 dark:text-white dark:hover:bg-red-500"
                >
                  <LogOut className="mr-2 h-4 w-4"/>
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full border border-teal py-2 text-sm font-medium text-teal transition hover:bg-sage-light/30 dark:border-gold dark:text-gold dark:hover:bg-teal"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="text-center rounded-full bg-gold py-2 text-sm font-medium text-ink transition hover:bg-gold-light dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
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