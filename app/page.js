"use client";
import { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Get from "./component/Get";
import PopularApp from "./component/PopularApp";
import Loading from "./component/Loading";
import Subscription from "./component/Subscription";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" overflow-hidden">
          <Banner/>
          <Get/>
          <PopularApp/>
          <Subscription/>
        </div>
      )}
    </div>
  );
}

