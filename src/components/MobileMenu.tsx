import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiHome, HiUser, HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { cn } from "../lib/utils";
import { HiDocument } from "react-icons/hi2";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
    {
      title: "Resume",
      href: "/resume",
      icon: HiDocument,
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 ml-auto md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <RxHamburgerMenu className="text-2xl" />
      </motion.button>
      <motion.nav
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: isOpen ? "100%" : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "md:hidden w-full min-h-screen fixed left-0 top-0 z-10 backdrop-blur bg-zinc-900/75 rounded-lg shadow",
          isOpen ? "block" : "hidden"
        )}
      >
        <motion.button
          onClick={closeMenu}
          className="absolute top-8 right-12 text-gray-400 hover:text-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiOutlineX className="text-2xl" />
        </motion.button>
        <ul className="flex flex-col items-center mt-12 gap-8">
          {data.map((item, id) => (
            <li key={id}>
              <Link
                to={item.href}
                onClick={closeMenu}
                className="flex items-center gap-2 text-xl hover:text-pink-600"
              >
                <item.icon className="text-xl" />
                {item.title}
              </Link>
            </li>
          ))}
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
      </motion.nav>
    </>
  );
}
