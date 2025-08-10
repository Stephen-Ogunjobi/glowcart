import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 px-4 md:px-8 py-2 md:py-3 flex items-center justify-between bg-transparent transition-all duration-300">
      <Logo />
      <NavLink />
    </header>
  );
}
