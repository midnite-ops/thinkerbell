import React from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios.js";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (error) {
      console.log("error in the fetchNotes function", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
   
  }, []);
   console.log(notes)

  return (
    <section className="bg-black h-screen w-full">
      <Navbar />

      {loading ? (
        <div className="text-white">Loading notes.....</div>
      ) : notes.length === 0 ? (
        <div className="text-white text-2xl font-bold text-center mt-20">
          No notes found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-30 px-10">
          {notes.map((note, index) => (
            <NoteCard key={index} title={note.title} content={note.content} created={note.createdAt} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
