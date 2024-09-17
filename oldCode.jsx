import { useState, useEffect } from 'react'
import axios from 'axios'
// import PokeList from '../PokeList/PokeList'

function Home() {

    const [poke, setPoke] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        let abortController = new AbortController();
        const loadPoke = async () => {
            try {
                setLoading(true);
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=17`, {
                    signal: abortController.signal
                });


                setPoke(response.data);
                setError("");
            } catch(err) {
                setError("Something went wrong"); 
            } finally {
                setLoading(false);
            }
        }
        loadPoke();
        return () => abortController.abort();
    }, []);

    console.log(poke);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{poke?.name}</h1>
            {poke?.sprites?.other?.home?.front_default && (
                <img src={poke.sprites.other.home.front_default} alt={poke?.name} />
            )}

            {/* <ul>
                {poke?.abilities.map((a,idx) => (
                    <li key={idx}>{a.abilities.stats}</li>
                ))}
            </ul> */}
            
            <ul>
                {poke?.abilities?.map((abil, idx) => (
                    <li key={idx}>{abil.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

