function updateNote(notes, noteId, title, content) {
	const trimmedTitle = title.trim();
	const trimmedContent = content.trim();

	if (!trimmedTitle || !trimmedContent) {
		return notes;
	}

	return notes.map((note) => {
		if (note.id === noteId) {
			return {
				...note,
				title: trimmedTitle,
				content: trimmedContent,
			};
		}

		return note;
	});
}
