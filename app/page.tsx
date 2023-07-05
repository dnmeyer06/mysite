export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4 py-10 lg:px-0">
      <h1 className="py-2 text-7xl">My name is Dan</h1>
      <h2 className="py-2 text-xl">I make things for the web</h2>
      <hr className="h-0.5 bg-black" />
      <div className="py-4">
        <h4 className="py-2 text-xl">About Me</h4>
        <p>I am a web developer with 7 years of experience.</p>
      </div>
      <div className="py-4">
        <h4 className="py-2 text-xl">This site</h4>
        <p>This site is made with Next.js and Tailwind</p>
      </div>
    </main>
  );
}
