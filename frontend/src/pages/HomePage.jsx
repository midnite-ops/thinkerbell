import React from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios.js";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (error) {
      setError(true);
      console.log("error in the fetchNotes function", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  console.log(notes);

  return (
    <section className="bg-black h-screen w-full">
      <Navbar />

      {loading ? (
        <div className="flex items-center justify-center mt-50 text-green-600 text-xl font-bold">
          Loading notes.....
        </div>
      ) : error ? (
        <div className="flex text-white flex-col mt-50 items-center gap-3">
          <h1 className="font-grotesque mb-2 text-6xl font-bold text-center text-primary">
            Something went wrong
          </h1>
          <p className="text-center w-1/3">
            We couldn't connect to the server (API error). Please try again in a
            few moments.
          </p>
        </div>
      ) : notes.length === 0 ? (
        <div className="text-white text-2xl font-bold text-center mt-20">
          No notes found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-30 px-10">
          {notes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              content={note.content}
              created={note.createdAt}
              id={note._id}
              setNotes={setNotes}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
