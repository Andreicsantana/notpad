const STORAGE_KEY = "notes_app_items";

function loadNotesFromStorage() {
	const raw = localStorage.getItem(STORAGE_KEY);

	if (!raw) {
		return [];
	}

	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch (error) {
		console.error("Erro ao carregar notas do localStorage:", error);
		return [];
	}
}

function saveNotesToStorage(notes) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}