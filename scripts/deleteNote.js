// Funcao para deletar uma nota existente

function deleteNote(notes, noteId) {
	return notes.filter((note) => note.id !== noteId);
}