"use client";
// import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const User = () => {
  //   const { data: session } = useSession();
  //   return <pre>{JSON.stringify(session)}</pre>;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div>{data ? JSON.stringify(data) : <div>loading...</div>}</div>;
};

export default User;
