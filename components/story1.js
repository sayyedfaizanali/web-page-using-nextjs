import Image from "next/image";

export default function Story1() {
  return (
    <div className="flex justify-center items-center overflow-hidden relative w-full h-[800px]">
    <Image
    src="/images/website-image_perfect_size.jpg"
    alt="Hero Image"
    className="object-cover"
    priority
    fill
  />
</div>
  );
}
