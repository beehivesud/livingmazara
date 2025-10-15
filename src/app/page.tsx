import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative grid place-items-center p-10">
      {/* Wave background pinned to bottom, cover width */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
        <div className="h-[40vh] sm:h-[45vh] md:h-[50vh] w-full bg-[url('/wave.svg')] bg-bottom bg-no-repeat bg-cover bg-[length:100%_100%] sm:bg-[length:100%_auto]" />
      </div>

      {/* Partner logo - positioned at top */}
      <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 w-[80vw] max-w-[500px]">
        <Image
          src="/logopartner.svg"
          alt="Partner logo"
          width={500}
          height={200}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Centered content */}
      <main className="w-full max-w-3xl text-center">
        {/* Large center image (logo) */}
        <div className="mx-auto w-full aspect-[16/9] rounded-xl flex items-center justify-center text-neutral-600 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/logoliving.svg"
              alt="Living Mazara logo"
              fill
              sizes="100vw"
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
        
        {/* Text close to logo */}
        <p className="text-base sm:text-lg text-neutral-700 mt-1">
          "Un progetto per dare nuova vita al complesso San Carlo Borromeo"
        </p>
      </main>

      {/* Bottom texts with reduced spacing */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center space-y-2">
        <p className="text-2xl sm:text-3xl font-semibold">sito in costruzione</p>
        <p className="text-neutral-700">
          per info inviare mail a{" "}
          <a className="underline hover:no-underline" href="mailto:info@livingmazara.it">info@livingmazara.it</a>
        </p>
      </div>
    </div>
  );
}
