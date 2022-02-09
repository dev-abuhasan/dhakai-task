import './Home.scss';
import NavCarousel from './NavCarousel';
import Products from './Products/Products';

const Home = () => {
    return (
        <div id="main_home_page">
            <div className='home_top_nav'>
                <NavCarousel />
            </div>
            <div className=''>
                <Products />
            </div>
        </div>
    );
};

export default Home;