import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="sticky top-0 backdrop-blur bg-zinc-800/70 z-10 w-full py-6 px-9 border-b border-b-zinc-700 flex items-center mb-0 md:mb-12">
        <div>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            D<span className="text-pink-600">w.</span>
          </h1>
        </div>
        <Navbar />
        <MobileMenu />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <footer className="relative bottom-0">
        <Footer />
      </footer>
    </>
  ),
});
