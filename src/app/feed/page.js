"use client"
import { useState } from "react";

const Page = () => {

  const [c, increment] = useState(0)

  return (
    <>
        <h1>hello { c }</h1>
        <button onClick={() => increment(c + 1)}>+</button>
    </>
  );
};


export const metadata = {
    title: 'Page Title',
    description: 'Description of the page',
    // Add more metadata as needed
  };
export default Page;
