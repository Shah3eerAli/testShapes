import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" h-[800px] bg-red-500  w-[650px] relative p-4">
        {/* topline */}
        <div className="border-b-[5px] border-green-600 bg-black  h-[50px] w-[450px] absolute right-[100px] top-0"></div>
        {/* chaipi */}
        <div className=" bg-black  h-[150px] w-[150px] absolute -right-8 -top-12 skew-y-[45deg]"></div>
        {/* left upper skew */}
        <div className="border-b-[5px] border-green-600 bg-black  h-[50px] w-[36px] absolute left-[64px] top-[18px] -skew-y-[45deg]"></div>
        {/* left upper line */}
        <div className="border-r-[5px] border-green-600 bg-black  h-[150px] w-[80px] absolute -left-3 top-[82px]"></div>
        {/* chaipi */}
        <div className=" bg-black  h-[150px] w-[150px] absolute -right-[86px] top-40 skew-y-[45deg]"></div>
        {/* left upper center skew */}
        <div className="border-b-[5px] border-r-[3px]  border-green-600 bg-black  h-[50px] w-[18px] absolute left-[48px] top-[193px] -skew-y-[45deg]"></div>
        {/* left center line */}
        <div className="border-r-[5px] border-green-600 bg-black  h-[300px] w-[80px] absolute -left-7 top-[248px]"></div>
        {/* left lower center skew */}
        <div className="border-t-[5px] border-green-600 bg-black  h-[50px] w-[20px] absolute left-[48px] top-[554px] skew-y-[45deg]"></div>
        {/* chaipi */}
        <div className=" bg-black  h-[150px] w-[150px] absolute -right-[86px] top-[200px] skew-y-[45deg]"></div>
        {/* left lower line */}
        <div className="border-r-[5px] border-green-600 bg-black  h-[150px] w-[80px] absolute -left-3 top-[564px]"></div>
        {/* left lower skew */}
        <div className="border-t-[5px] border-green-600 bg-black  h-[50px] w-[36px] absolute left-[64px] top-[728px] skew-y-[45deg]"></div>

        {/* left upper skew */}
        <div className="border-b-[5px] border-green-600 bg-black  h-[50px] w-[36px] absolute right-[64px] top-[18px] skew-y-[45deg]"></div>
        {/* left upper line */}
        <div className="border-l-[5px] border-green-600 bg-black  h-[150px] w-[80px] absolute -right-3 top-[82px]"></div>
        {/* left upper center skew */}
        <div className="border-b-[5px] border-l-[3px]  border-green-600 bg-black  h-[50px] w-[18px] absolute right-[48px] top-[193px] skew-y-[45deg]"></div>
        {/* left center line */}
        <div className="border-l-[5px] border-green-600 bg-black  h-[300px] w-[80px] absolute -right-7 top-[248px]"></div>
        {/* left lower center skew */}
        <div className="border-t-[5px] border-green-600 bg-black  h-[50px] w-[20px] absolute right-[48px] top-[554px] -skew-y-[45deg]"></div>
        {/* left lower line */}
        <div className="border-l-[5px] border-green-600 bg-black  h-[150px] w-[80px] absolute -right-3 top-[564px]"></div>
        {/* left lower skew */}
        <div className="border-t-[5px] border-green-600 bg-black  h-[50px] w-[36px] absolute right-[64px] top-[728px] -skew-y-[45deg]"></div>

        {/* bottom line */}
        <div className="border-t-[5px] border-green-600 bg-black  h-[50px] w-[450px] absolute right-[100px] top-[746px]"></div>
      </div>
    </div>
  );
}
