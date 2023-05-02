import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import HeaderCart from "./cart/HeaderCart";
import HeaderProfile from "./HeaderProfile";
import Search from "./Search";
import { useAuth } from "@/hooks/useAuth";

const Header: FC = () => {
  const { user } = useAuth();
  return (
    <div
      className="bg-secondary w-full py-5 px-6 grid"
      style={{
        gridTemplateColumns: "1fr 3fr 1.2fr",
      }}
    >
      <Link href="/">
        <Image
          className="text-white"
          priority
          width={120}
          height={37}
          src="/images/logo.png"
          alt="Amazone store"
        />
      </Link>
      <Search />
      <div className="flex items-center mr-10 justify-end gap-9">
        <Link href='/my-orders'>
          <span className="font-bold text-white">Orders</span>
        </Link>
        <Link href="/favorites" className="text-white">
          <AiOutlineHeart size={28} />
        </Link>
        <HeaderCart />
        {!! user && (
          <HeaderProfile />
        )}
      </div>
    </div>
  );
};

export default Header;
