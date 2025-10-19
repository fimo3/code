export default function Home() {
  return (
    <div className="font-sans grid grid-rows-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        Welcome to <span className="text-blue-600">Practice App</span>
      </h1>
      <div>
        <p className="text-green-800 bg-emerald-400">This app is going to be made in django and next.js, also 你是同性恋.</p>
      </div>
    </div>
  );
}
