import Link from 'next/link'

const Button = ({ onSend, value, hyper }) => {
    return(
        <button onClick={onSend} className="border border-gray-600 rounded-2xl w-80 h-14 bg-gray-500 mt-16 text-white font-bold text-xl">
          <Link href={hyper}>
            <a>{value}</a>
          </Link>
        </button>
    );
};

export default Button;