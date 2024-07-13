  "use client"
  import * as React from "react";
  import { useSession } from "next-auth/react";

  export default function Home() {
    const {data: session, status} = useSession()
    React.useEffect(() => {

    }, [session])
    return (
      <div>
        {status == "authenticated" ? "yes": "no"} 
        <br/>
        Do you dream of building a business empire that thrives in the real world? Welcome to RBS, 
        the business simulation game that puts you in the driver&apos;s seat of a dynamic, market-driven experience.
        </div>
    )
  }
