import { useEffect, useState } from "react";
import PicsCard from "./PicsCard";

export type pics = {
  id: number;
  src: { medium: string };
  alt: string;
};

const Homepage = () => {
  const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

  const [pics, setPics] = useState<pics[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const getCurated = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.pexels.com/v1/curated", {
        method: "GET",
        headers: {
          authorization: apiKey,
        },
      });
      setLoading(false);
      const data = await res.json();
      setPics(data.photos);
      console.log(data.photos);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const searchImage = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${searchTerm}`,
      {
        method: "GET",
        headers: {
          authorization: apiKey,
        },
      }
    );
    setLoading(false);
    const data = await res.json();
    console.log(data);

    setPics(data.photos);
  };
  useEffect(() => {
    getCurated();
  }, []);
  return (
    <div>
      <form
        className="flex justify-center my-4"
        onSubmit={(e) => {
          e.preventDefault();
          searchImage();
        }}
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="border p-2 rounded"
        />
        <button className="border p-2 ml-2">Search</button>
      </form>
      <div className="flex gap-6 flex-wrap justify-center">
        {loading ? (
          <p>Loading images...</p>
        ) : (
          pics?.map((pic) => {
            return <PicsCard key={pic.id} pic={pic} />;
          })
        )}
      </div>
    </div>
  );
};

export default Homepage;
