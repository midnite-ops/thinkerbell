import { PenBoxIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import { Link } from 'react-router'


const NoteCard = ({ title, content, created, id, setNotes}) => {
    console.log(id)
    const handleDelete = async (e,id) => {
        e.preventDefault()
        try {
            if(!window.confirm("Are you sure you want to delete this note?")) return
            const res = await api.delete(`/notes/delete/${id}`)
            toast.success("Note deleted successfully")
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id))
        } catch (error) {
            toast.error("Failed to delete note")
        }
    }
  return (
    <Link to={`/notes/update/${id}`} className='bg-white p-6 rounded-lg'>
        <div className=' mb-7 flex gap-3 flex-col items-start'>
            <div className='flex flex-col gap-2'>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            
        </div>

        <div className='flex justify-between items-center'>
            <p> {formatDate(new Date(created))}</p>
            <div className='flex gap-2 items-center'>
                <Link to={`/notes/update/${id}`} className='cursor-pointer'>
                    <PenBoxIcon />
                </Link>
                
                <button onClick={(e) => handleDelete(e, id)} className='cursor-pointer'>
                    <Trash2Icon color='red'/>
                </button>
                
            </div>
            
        </div>
    </Link>
  )
}

export default NoteCard