import { Button } from "@/components/ui/button";
import Header from "./_components/header";
import Hero from "./_components/hero";

/**
 * Default page for applications
 * @returns 
 */

export default function Home() {
  return (
    <div className={"flex flex-col items-center"}>
      <Header />
      <Hero />
    </div>
  );
}
