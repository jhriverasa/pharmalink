import Link from 'next/link'

const Button = ({ onSend, hyper, value }) => {
  return (
    <button onClick={onSend} className="p-3 w-full my-10 rounded-2xl bg-gray-500 hover:bg-gray-400 text-xl text-white font-bold">
      <Link href={hyper}>
        <a>{value}</a>
      </Link>
    </button>
  )
}

export default Button;
