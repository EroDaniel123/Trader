import Logo from '../../images/logo.png';

function Header () {
    return (
        <div className="flex md:justify-start pl-[2rem]  md:pl-[4rem]">
            <img src={Logo} alt="logo" className='w-[9rem] md:w-[12rem]' />
        </div>
    )
}

export default Header;


// touched