<template>
    <div class="row m-3">
        <div class="col-lg-3 col-md-4 col-sm-6 mb-1 text-start" v-for="note in notes" :key="note.id">
            <div class="card">
                <router-link :to="{ name: 'note-detail', params: { noteId: note.id } }">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ note.title }}</h5>
                        <p class="card-text">{{ note.body }}</p>
                    </div>
                </div>
                </router-link>
                <button class="btn btn-danger" @click="deleteNote(note.id)"><i class="bi bi-trash3"></i> Borrar</button>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import NoteService from '@/services/NoteService'
    const noteService = new NoteService()
    const notes = noteService.getNotes()

    onMounted(async () => {
        await noteService.fetchNotes()
    })

    const deleteNote = (id) => {
        try {
            alert('Nota eliminada')
            noteService.deleteNote(id)
            window.location.href = "http://localhost:8080/"
        } catch (error) {
            alert('Error al eliminar la nota')
            console.log(error)
        }
        
    }

</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>