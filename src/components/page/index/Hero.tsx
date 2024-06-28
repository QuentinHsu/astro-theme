export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)]">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        Welcome to
        {' '}
        <span className="text-blue-600">Astro.js</span>
        {' '}
        with TypeScript
      </h1>

    </div>
  )
}
