import { Slide } from "../animation/Slide";
import Type from "./Type";

export default function Home() {
  return (
    <Slide>
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div className="p-6">
          <Slide delay={0.12}>
            <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h3>
            <h3 className="mt-8 scroll-m-20 text-4xl tracking-tight mb-8">
              I'm{" "}
              <span className="text-pink-600 italic">
                Dwiky Rizky Ananditya
              </span>
            </h3>
            <div className="scroll-m-20 text-4xl font-semibold tracking-tight">
              <Type />
            </div>
          </Slide>
        </div>
        <div className="mx-12">
          <Slide delay={0.25}>
            {" "}
            <img
              src="/music.webp"
              alt="Hero"
              className="rounded-md shadow-lg"
            />
          </Slide>
        </div>
      </section>
    </Slide>
  );
}
