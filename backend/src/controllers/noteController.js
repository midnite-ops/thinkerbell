import Note from "../models/Note.js"

export async function getAllNotes(_, res){
    try {
         const allNotes = await Note.find()
         res.status(200).json(allNotes)
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.error("error in the geAlltNote controller", error)
    }

}
export async function getNote(req,res){
    try {
        const findNote = await Note.findById(req.params.id)
        if(!findNote) return res.status(400).json({message: "Note does not exist"})
        res.json(findNote)
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.error("error in the getNote controller", error)
    }
}

export async function deleteNote(req,res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);

        if(!deleteNote) return res.status(400).json({message: "Note does not exist"})

        res.status(200).json({message: "Note successfully deleted"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.error("error in the deleteNote controller", error)
    }
}

export async function updateNote(req,res){
    try {
        const {title,content} = req.body
        const updateNote = await Note.findByIdAndUpdate(req.params.id, {title,content})
        if(!deleteNote) return res.status(400).json({message: "Note does not exist"})
        res.status(200).json({message: "Note updated successfully"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.error("error in the updateNote controller", error)
    }
}

export async function createNote(req,res){
    try {
        const {title,content} = req.body

        const newNote = new Note({title, content})
        await newNote.save()
        res.status(200).json({message: "note created successfully"})
        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }

} 