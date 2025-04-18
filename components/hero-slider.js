import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="flex justify-center items-center overflow-hidden relative w-full h-[800px]"> {/* Added height */}
      <Image
        src="/images/website-image_perfect_size_2.jpg"
        alt="Hero Image"
        className="object-cover"
        priority
        fill
      />
    </div>
  );
}
