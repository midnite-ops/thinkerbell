import React from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios.js'
import { useEffect } from 'react';


const HomePage = () => {
    const [notes, setNotes] = React.useState([]);

    const fetchNotes = async () => {
        const res = await api.get("/notes");
        setNotes(res.data);
    }

    useEffect(() => {
        fetchNotes()
    },[])
  return (
    <section className='bg-black h-screen w-full'>
        <Navbar />
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-30 px-10'>
            {[1,2].map((note, index) => (
                <NoteCard key={index} />
            ))}
        </div>
    </section>
  )
}

export default HomePage