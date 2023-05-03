import Link from "next/link";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <MainLayout>
      <div className={"description"}>
        <div>
          <a
            href="https://github.com/reyduar"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Ariel Duarte(c)2023
          </a>
        </div>
      </div>
      <div className={"center"}>
        <h1>Contact</h1>
      </div>

      <div className={"grid"}>
        <Link href="/" className={"card"}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return home.</p>
        </Link>

        <a
          href="https://github.com/reyduar"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Social Medias <span>-&gt;</span>
          </h2>
          <p>
            I am a polyglot software developer, I have experience working with
            differents software development &nbsp;profiles..
          </p>
        </a>
      </div>
    </MainLayout>
  );
}
