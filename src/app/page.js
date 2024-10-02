"use client";
import react from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";
import Image from "next/image";

function Home() {
    return (
      <div className="wrapper font-[family-name:var(--font-geist-sans)]">
        <Header className=" font-[family-name:var(--font-geist-mono)]" />
        <TODOHero todos_completed={0} total_todos={0}/>
        <Form />
        <TODOList todos={[]} />
      </div>
    );
  }
  export default Home;
  

