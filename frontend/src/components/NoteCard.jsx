import { PenBoxIcon, Trash2Icon } from 'lucide-react'



const NoteCard = () => {
  return (
    <div className='bg-white p-6 rounded-lg'>
        <div className=' mb-7 flex gap-3 flex-col items-start'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Title</h1>
                <h1>My name is jesse Oyims</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold text-black/40'>Content</h1>
                <p>I am a super star</p>
            </div>
            
        </div>

        <div className='flex justify-between items-center'>
            <p>Created at: 2023-10-01</p>
            <div className='flex gap-2 items-center'>
                <PenBoxIcon />
                <Trash2Icon color='red'/>
            </div>
            
        </div>
    </div>
  )
}

export default NoteCard