import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="text-xl">
        welcome to admin page, {session?.user?.username || session.user.name}
      </div>
    );
  }

  return <div className="text-xl">please sign in</div>;
};

export default page;
