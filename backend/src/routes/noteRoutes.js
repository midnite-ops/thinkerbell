import express from 'express';
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from '../controllers/noteController.js';

const routes = express.Router()

routes.get("/", getAllNotes)
routes.get('/:id', getNote)
routes.post("/", createNote)
routes.put("/:id", updateNote)
routes.delete("/:id", deleteNote)

export default routes