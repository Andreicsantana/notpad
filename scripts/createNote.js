function createNote(notes, title, content) {
	const trimmedTitle = title.trim();
	const trimmedContent = content.trim();

	if (!trimmedTitle || !trimmedContent) {
		return notes;
	}

	const newNote = {
		id: Date.now(),
		title: trimmedTitle,
		content: trimmedContent,
	};

	return [newNote, ...notes];
}