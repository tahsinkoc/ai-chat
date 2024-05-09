import Bar from "@/components/Bar";
import Chat from "@/components/Chat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="lg:block hidden">
        <Bar />
      </div>
      <Chat />
    </div>
  );
}
