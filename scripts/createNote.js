// Funcao para criar uma nova nota::::
function createNote(notes, content) {
	const trimmedContent = content.trim();

	if (!trimmedContent) {
		return notes;
	}

	const newNote = {
		id: Date.now(),
		content: trimmedContent,
	};

	return [newNote, ...notes];
}