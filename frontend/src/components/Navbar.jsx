import { PlusIcon } from 'lucide-react'
import { useNavigate, Link } from 'react-router'


const Navbar = () => {
  return (
    <header className='bg-white flex justify-between py-3 px-50 text-white'>
        <div className='text-3xl text-black font-mono font-bold'>ThinkerBell</div>
        <Link to={'/create'} className='bg-green-600 p-3 rounded-full cursor-pointer flex items-center'>
            <PlusIcon />
            New Note
        </Link>
    </header>
  )
}

export default Navbar