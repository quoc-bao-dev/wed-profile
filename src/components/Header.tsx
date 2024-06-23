import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full py-8 bg-white/50 grid place-items-center">
            <div className="flex gap-4">
                <Link
                    className="hover:underline transition duration-1000"
                    to={'/'}
                >
                    Home
                </Link>
                <Link
                    className="hover:underline transition duration-1000"
                    to={'/about'}
                >
                    About
                </Link>
                <Link
                    className="hover:underline transition duration-1000"
                    to={'/contact'}
                >
                    Contact
                </Link>
                <Link
                    className="hover:underline transition duration-1000"
                    to={'/portfolio'}
                >
                    Portfolio
                </Link>
                <Link
                    className="hover:underline transition duration-1000"
                    to={'/qna'}
                >
                    Q & A
                </Link>
            </div>
        </div>
    );
};

export default Header;
