import { HiDocument } from "react-icons/hi2";
import { Slide } from "../animation/Slide";
import Github from "./Github";
import Techstack from "./Techstack";
import ToolsStack from "./Toolstack";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <Slide>
      <section className="grid items-center gap-12 lg:grid-cols-2 mb-16">
        <div className="p-6">
          <Slide delay={0.12}>
            <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8">
              Know Who <span className="text-pink-600">I'M</span>
            </h3>
            <blockquote className="text-xl mt-6 border-l-2 pl-6 italic text-zinc-400">
              Hi everyone, I am{" "}
              <span className="text-pink-600">Dwiky Rizky Ananditya</span>,
              known as <span className="text-pink-600">KYZSUKI</span>, a newbie
              frontend developer. Graduate of SMKN 1 Selayar, Department of
              Computer and Network Engineering. I have an interest in a career
              as a full-stack developer and reverse engineer.
            </blockquote>
            <div className="w-full inline-flex gap-6 justify-center md:justify-start">
              <a
                href="mailto:kyzsuki@gmail.com"
                className="mt-8 inline-flex font-semibold items-center px-4 py-2 gap-2 rounded bg-pink-700 hover:bg-pink-800"
              >
                <MdEmail style={{ fontSize: "1.2em" }} /> Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/14EgxFCOo0pFSrXjI2jpMJ7hs2Ej0YXvB/view"
                className="mt-8 inline-flex font-semibold items-center px-4 py-2 gap-2 rounded bg-pink-700 hover:bg-pink-800"
              >
                <HiDocument style={{ fontSize: "1.2em" }} /> Resume
              </a>
            </div>
          </Slide>
        </div>
        <div className="mx-12">
          <Slide delay={0.25}>
            {" "}
            <img
              src="/me.webp"
              alt="Hero"
              className="rounded-full max-w-80 shadow-lg grayscale opacity-50"
            />
          </Slide>
        </div>
      </section>
      <Techstack />
      <ToolsStack />
      <Github />
    </Slide>
  );
}
