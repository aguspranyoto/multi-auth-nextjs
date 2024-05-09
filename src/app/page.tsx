import { buttonVariants } from "@/components/ui/button";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">Home</h1>
      <Link className={buttonVariants()} href="/admin">
        Open my admin
      </Link>
      {/* 
      <div>Client session:</div>
      <User />
      <div>Server session:</div>
      {JSON.stringify(session)} */}
    </div>
  );
}
