import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative h-[50rem] w-full bg-white flex">
        {/* Left Side - Programming Image */}
        <div className="relative z-10 flex-1">
          <Image
            src="/images/programming.png"
            alt="programming"
            layout="fill"
            objectFit="contain" // Use contain or cover based on your preference
            className="object-contain" // Ensures the image is displayed correctly
          />
        </div>

        {/* Right Side - Balcony Image */}
        <div className="relative h-full w-[40rem]">
          <Image
            src="/images/balcony.jpg"
            alt="balcony"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
