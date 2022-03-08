import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : null}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : null}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: cornsilk;
        }
        a {
          margin-right: 5px;
          text-decoration: none;
          color: red;
        }
        .active {
          font-weight: bold;
          color: blue;
        }
      `}</style>
    </nav>
  );
}
