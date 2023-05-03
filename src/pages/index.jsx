import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
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
        <Image
          className={"logo"}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={"grid"}>
        <Link href="/about" className={"card"} rel="noopener noreferrer">
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Discover development overview&nbsp;project.</p>
        </Link>

        <Link href="/contact" className={"card"} rel="noopener noreferrer">
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>See all the social medias information&nbsp;project.</p>
        </Link>
      </div>
    </MainLayout>
  );
}
