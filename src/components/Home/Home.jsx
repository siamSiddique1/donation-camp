import Banner from '../Header/Banner/Banner';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const cards =useLoaderData();
    // console.log(cards)
    return (
        <div>
            <Banner></Banner>
            <Cards cards={cards}></Cards>
             </div>
    );
};

export default Home;