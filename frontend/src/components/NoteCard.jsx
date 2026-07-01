import { PenBoxIcon, Trash2Icon } from 'lucide-react'



const NoteCard = ({ title, content, created }) => {
  return (
    <div className='bg-white p-6 rounded-lg'>
        <div className=' mb-7 flex gap-3 flex-col items-start'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Title</h1>
                <h1>{title}</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold text-black/40'>Content</h1>
                <p>{content}</p>
            </div>
            
        </div>

        <div className='flex justify-between items-center'>
            <p>Created at: {created}</p>
            <div className='flex gap-2 items-center'>
                <PenBoxIcon />
                <Trash2Icon color='red'/>
            </div>
            
        </div>
    </div>
  )
}

export default NoteCard