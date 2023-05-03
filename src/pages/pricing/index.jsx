import { Inter } from "next/font/google";
import { Button } from "primereact/button";
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
        <h1>Pricing</h1>
      </div>
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
      </div>

      <div className={"grid"}>
        <a
          href="https://github.com/reyduar"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Premium Price <span>-&gt;</span>
          </h2>
          <p>2000</p>
        </a>
      </div>
    </MainLayout>
  );
}
