import { BsFacebook, BsGithub, BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="relative w-full mt-20 py-3 bg-zinc-900/25 px-24 text-zinc-400">
      <div className="text-center flex flex-col lg:flex-row items-center justify-between gap-6">
        <span>Designed and Developed by Kyzsuki</span>
        <div>
          <span>Copyright &#169; {new Date().getFullYear()} Kyzsuki</span>
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <a href="https://github.com/kyzsuukii">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://t.me/kyzsuki">
              <BsTelegram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/kyzsuki/">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
