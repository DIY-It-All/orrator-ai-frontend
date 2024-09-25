import { Hero } from "./Hero";
import { Content } from "./Content";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col">
        <Hero />
        <div className="divider"></div>
        <Content />
      </div>
    </>
  );
}
