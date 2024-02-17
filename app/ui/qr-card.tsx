import Image from "next/image";
import { jost } from '@/app/ui/fonts';

export default function QrCard({
    imageQr
}: {imageQr: string}) {
    return (
        <div className="rounded-3xl block py-4 bg-white-qr object-contain md:w-80  my-auto w-5/6">
            <Image
            className="object-fill w-11/12 rounded-xl m-auto"
            src={imageQr}
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
            unoptimized 
            />
            <p className="${jost.className} text-dark-blue text-xl font-extrabold text-center text-wrap pt-5 px-7">Improve your front-end skills by building projects</p>
            <p className="${jost.className} text-sm font-medium text-grayish-blue text-center text-wrap py-5 px-7">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      );
}