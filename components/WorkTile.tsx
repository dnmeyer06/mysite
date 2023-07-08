import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HeaderText } from "./Header";

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
        className="min group relative aspect-square w-10/12 cursor-pointer md:min-w-[300px] md:max-w-[30%]"
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
      <div className="block pb-16 last:pb-0 md:hidden">
        <p className="text-3xl tracking-widest">{title}</p>
      </div>
    </>
  );
};

export default WorkTile;
