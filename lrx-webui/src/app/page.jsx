import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="justify-center max-w-3xl mx-auto">
      <h1 className="mt-3 ms-5 text-6xl">Welcome to</h1>
      <h1 className="ms-5 text-9xl">LRX</h1>
      <div>
        <img src="img/adobe-lightroom-icon.png" alt="lr"/>
      </div>
      </div>
    </div>
  );
}
