import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between glass elevated rounded-b-2xl transition-all duration-300 hover:shadow-xl">
      <Logo />
      <NavLink />
    </header>
  );
}
