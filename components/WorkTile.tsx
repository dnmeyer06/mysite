import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const WorkTile = ({
  link,
  alt,
  src,
  title,
}: {
  link: string;
  alt: string;
  src: StaticImageData;
  title: string;
}) => {
  return (
    <>
      <Link
        href={link}
        className="min group relative flex aspect-square w-10/12 cursor-pointer md:w-[calc(33%-.75rem)]"
      >
        {/* For desktop, show the title on hover */}
        <div className="relative hidden h-full w-full md:block">
          <div className="relative z-10 hidden h-full w-full bg-black text-center opacity-90 group-hover:block">
            <p className="relative top-[33%] text-3xl tracking-widest text-gray-50">
              {title}
            </p>
          </div>
        </div>
        <Image alt={alt} src={src} className="-z-10 object-cover" fill={true} />
      </Link>
      {/* For mobile, show the title below the image */}
      <div className="flex justify-center text-center md:hidden">
        <div className="w-10/12">
          <Link href={link}>
            <p className="text-3xl tracking-widest">{title}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkTile;
