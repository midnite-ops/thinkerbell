import express from 'express';
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from '../controllers/noteController.js';

const routes = express.Router()

routes.get("/notes", getAllNotes)
routes.get('/notes/:id', getNote)
routes.post("/create", createNote)
routes.put("/notes/update/:id", updateNote)
routes.delete("/notes/delete/:id", deleteNote)

export default routes