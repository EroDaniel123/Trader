import Header from '../Header/Header';
import Main from '../Main/Main';
import background from '../../images/BG.png';

function Body() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <Header />
            <Main />
        </div>
    );
}

export default Body;