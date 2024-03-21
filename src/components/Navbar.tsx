import { Link } from "@tanstack/react-router";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { HiHome, HiUser } from "react-icons/hi2";

export default function Navbar() {
  const data = [
    {
      title: "Home",
      href: "/",
      icon: HiHome,
    },
    {
      title: "About",
      href: "/about",
      icon: HiUser,
    },
  ];

  return (
    <nav className="md:block hidden ml-auto">
      <ul className="flex items-center flex-wrap">
        <li className="ml-auto inline-flex items-center gap-8 mr-4 md:mr-12">
          {data.map((item, id) => (
            <Link
              key={id}
              to={item.href}
              className="inline-flex items-center gap-2 text-lg hover:text-zinc-400 [&.active]:text-pink-600"
            >
              <item.icon />
              {item.title}
            </Link>
          ))}
        </li>
        <li>
          <a
            href="https://github.com/kyzsuukii/portfolio"
            className="inline-flex items-center px-4 py-2 rounded bg-pink-700 hover:bg-pink-800"
          >
            <CgGitFork style={{ fontSize: "1.2em" }} />
            <AiFillStar style={{ fontSize: "1.1em" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
