import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "../CardGridList/GridCard";
import "./Home.css";
import View from "../CardGridList/View";

function Home() {
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=35`,
          {
            signal: abortController.signal,
          }
        );

        const pokeUrls = response.data.results.map((pokemon) => pokemon.url);
        const pokeDataPromises = pokeUrls.map((url) => axios.get(url));
        const pokeDataResponses = await Promise.all(pokeDataPromises);
        const pokeData = pokeDataResponses.map((res) => res.data);

        setPokeList(pokeData);
        setError("");
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadPoke();

    return () => abortController.abort();
  }, [pokeList.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="product">
        <p>Products ({pokeList.length})</p>
        <View/>
      </div>
      <div className="card-container">
        {pokeList.map((poke) => (
          <PokeCard key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
}

export default Home;
