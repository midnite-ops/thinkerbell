import React from 'react'
import { ArrowLeft, Loader } from 'lucide-react'
import { useParams } from 'react-router'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import api from '../lib/axios'
import { useNavigate } from 'react-router'

const NoteDetailsPage = () => {
  const { id } = useParams()
  const [info, setInfo] = useState({})
  const [save, setSave] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchNoteDetails = async () => {
      try{
        const res = await api.get(`/notes/${id}`)
        setInfo(res.data)
      }
      catch(error){
        toast.error("Failed to fetch note details")
      }finally{
        setLoading(false)
      }
    }

    fetchNoteDetails()
    
  },[])
  const handleSave = async (e) => {
    if(!info.title.trim() || !info.content.trim()) {
      toast.error("Please fill in all fields")
      return
    }
    e.preventDefault()
    setSave(true)
    try {
      const saveNote = await api.put(`/notes/update/${id}`, info)
      toast.success("Note updated successfully")
      navigate('/')
    } catch (error) {
      toast.error("Failed to update note")
    }finally{
      setSave(false)
    }
  }

  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  if(loading){
    return (
      <div className='h-screen bg-black flex justify-center items-center'>
        <Loader className='animate-spin text-white ' size={48} />
      </div>
    )
    
  }

  return (
    <section className='h-screen bg-black text-white flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center h-full w-1/2'>
        <div className='self-start text-3xl font-bold cursor-pointer' onClick={() => navigate('/')}>
          <ArrowLeft className='inline-block mr-2' />
          Back to notes
        </div>   
        <div className='bg-white/30 self-start p-8 h-fit mt-10 rounded-lg w-150'>
  
          <form onSubmit={handleSave} className='flex flex-col gap-4 h-full'>
            <h1 className='text-2xl font-bold mb-4'>Create New Note</h1>
            <label htmlFor="" className='flex flex-col gap-2'>
              Title
              <input type="text" name="title" value={info.title} onChange={handleChange} placeholder='Note Title' className=' py-2 rounded-full pl-5 text-white placeholder:text-white/50 border border-white/50 focus:outline-none  w-3/4' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'>
              Content
              <textarea name="content" value={info.content} onChange={handleChange} placeholder='Write Your Note here' className=' py-2 rounded-xl h-30 pl-5 text-white placeholder:text-white/50 border border-white/50 focus:outline-none w-3/4'/>
            </label>
            <button type='submit' className='bg-white cursor-pointer self-end text-black py-2 px-4 font-bold text-sm rounded-full hover:bg-gray-200 transition-colors duration-200 curosr-pointer' disabled={save}>
              {save ? "Saving....." : "Save"}
            </button>
          </form>
        </div>
      </div>
        
    </section>
  )
}

export default NoteDetailsPage