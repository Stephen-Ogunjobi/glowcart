import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function NavLink() {
  return (
    <nav className="flex gap-8 items-center">
      <Link href="/" className="accent font-bold">
        Home
      </Link>
      <Link href="/shop" className="accent">
        Shop
      </Link>
      <Link href="/blog" className="accent">
        Blog
      </Link>
      <Link href="/contact" className="accent">
        Contact
      </Link>
      <Link href="/cart" className="accent flex items-center" aria-label="Cart">
        <span className="mr-1">
          <FaShoppingCart color="var(--color-rose-gold)" size={24} />
        </span>
      </Link>
      <Link href="/user" className="accent flex items-center" aria-label="User">
        <FaUser color="var(--color-rose-gold)" size={24} />
      </Link>
    </nav>
  );
}
