// Funcao para atualizar uma nota existente
function updateNote(notes, noteId, content) {
	const trimmedContent = content.trim();

	if (!trimmedContent) {
		return notes;
	}

	return notes.map((note) => {
		if (note.id === noteId) {
			return {
				...note,
				content: trimmedContent,
			};
		}

		return note;
	});
}
