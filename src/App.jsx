
export default function App() {
  return (
  <header className="bg-black flex items-center justify-between text-amber-50 px-40 py-7">
    <a href="/" className="text-3xl font-semibold tracking-wider">bikcraft</a>
    <nav>
      <ul className="flex justify-between gap-8">
        <li className="hover:bg-yellow-600 px-4 py-2 rounded-[10px] capitalize"><a href="/products">products</a></li>
        <li className="hover:bg-yellow-600 px-4 py-2 rounded-[10px] capitalize"><a href="/about-us">about us</a></li>
        <li className="hover:bg-yellow-600 px-4 py-2 rounded-[10px] capitalize"><a href="/contact">contact</a></li>
      </ul>
    </nav>
  </header>
);
}
