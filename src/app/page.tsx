import Board from "@/components/Board";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <section className="m-8 flex-auto relative flex">
        <Board />
      </section>
    </main>
  );
}
