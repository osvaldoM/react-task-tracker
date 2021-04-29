import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='my-2'>
            <p className='text-center'>Copyright &copy; {new Date().getFullYear()}</p>
            <Link className='text-center block' to='/about'>About</Link>
        </footer>
    )
}

export default Footer;
