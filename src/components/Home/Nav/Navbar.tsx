import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "../../ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";


interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="sticky top-0 inset-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[1000] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
        <img
          className="shadow-2xl  rounded-xl  z-10 neon-border "
          id="about-img"
          src="/logo1.webp"
          alt=""
          width={50}
          height={50}
        />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Recharge 24
          </p>
        </Link>

        {session ? (
            <UserAccountNav user={session} />
        ) : (
          <>
            <Link href="/login" className={buttonVariants()}>
              Log In
            </Link>
            <Link href="/register">
              <Button >
                register
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
