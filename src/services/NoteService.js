import { ref } from "vue";
const API_URL = 'http://localhost:3000'

class NoteService {
    
    constructor() {
        this.notes = ref([])
        this.note = ref({})
        this.noteTitle = ref('')
        this.noteBody = ref('')
        this.noteId = ref('')

    }

    getNotes() {
        return this.notes
    }

    getNote() {
        console.log(this.note.value, "tu puta madre gil 2")
        return this.note.value
    }

    async fetchNotes() { //lista de notas [ id - title - body ]
        try {
            const response = await fetch(`${API_URL}/api/notes/${localStorage.getItem('userId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  localStorage.getItem('token')
                }
            })
            const data = await response.json()
            this.notes.value = data
        } catch (error) {
            console.log(error)
        }
        
    }

    async fetchNote(id) { // nota { id - title - body }
        try {
            console.log(id, "id de user")
            const idNote = id.toString()
            const url = `${API_URL}/api/note/${idNote}`
            console.log(url)
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  localStorage.getItem('token')
                }
            })
            const data = await response.json()
            this.note.value = data
            console.log(this.note.value, "tu puta madre gil 45")
            return this.note.value
        } catch (error) {
            console.log(error)
        }
    }

    async saveChangeNote(id, title, body) { // guarda cambios de nota  status 200 ok 
        console.log('saveChangeNote llamada')
        try {
            const response = await fetch(`${API_URL}/api/note/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  localStorage.getItem('token')
                },
                body: JSON.stringify({
                    title: title,
                    body: body
                })
            })
            if (response.status === 204) {
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }

    async createNote(title, body, id_user) { // crea nota  status 201 ok
        try {
            console.log(id_user, "id de user")
            const response = await fetch(`${API_URL}/api/note/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  localStorage.getItem('token')
                },
                body: JSON.stringify({
                    id_user: id_user,
                    title: title,
                    body: body
                })
            })
            if (response.status === 204) {
                return true
            }
            console.log(response.status)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteNote(id) { // borra nota  status 204 ok
        try {
            const response = await fetch(`${API_URL}/api/note/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  localStorage.getItem('token')
                }
            })
            if (response.status === 204) {
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default NoteService