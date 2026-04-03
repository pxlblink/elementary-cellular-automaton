import { Link } from "react-router";

export default function Help() {
  return (
    <>
      <h1 className="px-1 mx-auto mt-20 mb-8 max-w-xl text-3xl text-center text-balance">
        Sources to read on elementary cellular automaton
      </h1>
      <div className="flex flex-col gap-2 justify-center content-center items-center px-3">
        <a
          className="block text-center text-blue-800 underline text-l text-balance"
          href="https://en.wikipedia.org/wiki/Elementary_cellular_automaton"
        >
          Wikipedia
        </a>
        <a
          className="block text-center text-blue-800 underline text-l text-balance"
          href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"
        >
          Wolfram math world
        </a>
        <a
          className="block text-center text-blue-800 underline text-l text-balance"
          href="https://natureofcode.com/cellular-automata/"
        >
          Nature of code
        </a>
        <a
          className="block text-center text-blue-800 underline text-l text-balance"
          href="https://plato.stanford.edu/entries/cellular-automata/"
        >
          Stanford encyclopedia of philosophy
        </a>
      </div>
      <div className="absolute bottom-0 mx-2">
        <Link to="/">Back</Link>
      </div>
    </>
  );
}
