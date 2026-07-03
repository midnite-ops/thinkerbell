import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import React from 'react'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const CreateNotePage = () => {
  const [info, setInfo] = React.useState({
    title: '',
    content: ''
  })

  const [createNote, setCreatNote] = useState(false)

  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!info.title.trim() || !info.content.trim()) {
      toast.error("Please fill in all fields")
      return
    }
    setCreatNote(true)
    try {
      const res = await api.post('/create', info)
      toast.success("Note created successfully")
      navigate('/')
    } catch (error) {
      toast.error("Failed to create note")
    }finally{
      setCreatNote(false)
    }
    // Handle form submission logic here
  }
  const navigate = useNavigate()
  return (
    <section className='h-screen bg-black text-white flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center h-full w-1/2'>
        <div className='self-start text-3xl font-bold cursor-pointer' onClick={() => navigate('/')}>
          <ArrowLeft className='inline-block mr-2' />
          Back to notes
        </div>   
        <div className='bg-white/30 self-start p-8 h-fit mt-10 rounded-lg w-150'>
  
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 h-full'>
            <h1 className='text-2xl font-bold mb-4'>Create New Note</h1>
            <label htmlFor="" className='flex flex-col gap-2'>
              Title
              <input type="text" name="title" value={info.title} onChange={handleChange} placeholder='Note Title' className=' py-2 rounded-full pl-5 text-white placeholder:text-white/50 border border-white/50 focus:outline-none  w-3/4' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'>
              Content
              <textarea name="content" value={info.content} onChange={handleChange} placeholder='Write Your Note here' className=' py-2 rounded-xl h-30 pl-5 text-white placeholder:text-white/50 border border-white/50 focus:outline-none w-3/4'/>
            </label>
            <button type='submit' className='bg-white cursor-pointer self-end text-black p-2 font-bold text-sm rounded-full hover:bg-gray-200 transition-colors duration-200 curosr-pointer' disabled={createNote}>
              {createNote ? "Creating....." : "Create Note"}
            </button>
          </form>
        </div>
      </div>
        
    </section>
  )
}

export default CreateNotePage