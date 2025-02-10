import Memes from "./body/getMemes";

export default function Home() {
  return (
    <div className="p-4">
      Hello World {Math.random()}
      <Memes />
    </div>
  );
}
