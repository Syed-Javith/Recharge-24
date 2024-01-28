import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../../ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="sticky top-0 inset-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[1000] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          RechargeLogo
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
            <Link href="/register" className={buttonVariants()}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
