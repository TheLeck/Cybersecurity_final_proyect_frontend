<template>
    <h3>Edicion de nota</h3>
    <div class="mx-auto container">
        <div class="input-group">
            <input type="text" v-model="noteTitle" class="form-control" placeholder="Titulo de la nota"/>
            <div class="input-group-append">
                <button class="btn btn-primary" @click="saveNoteChange">Save</button>
            </div>
        </div>
        <div class="input-group">
            <textarea v-model="content" class="form-control" placeholder="Contenido de la nota"/>
            
        </div>
    </div>
    
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import NoteService from '@/services/NoteService.js'
    
    const sevice = new NoteService()
    const router = useRoute()
    const postId = ref('')
   
    const noteTitle = ref('')
    const content = ref('')

    onMounted(() => {
        postId.value = router.params.noteId
        sevice.fetchNote(postId.value).then((note) => {
        noteTitle.value = note.title
        content.value = note.body
        })
        
    })

    const saveNoteChange = () => {
        console.log(postId.value, noteTitle.value, content.value)
        try {
        const response = sevice.saveChangeNote(postId.value, noteTitle.value, content.value)
        if (response) {
            alert('cambios guardados')
            //router.push({ name: 'home' })
            window.location.href = "http://localhost:8080/"
        }
        } catch (error) {
            console.log(error)
        }
    
        /*
        sevice.saveChangeNote(postId.value, noteTitle.value, content.value).then((note) => {
            console.log(note, "tu puta madre gil 2")
            route.push({ name: 'note-detail', params: { noteId: note.id } })
        })
        */
    }
    
</script>

<style>
    .ql-container {
        min-height: 65vh;
    }
</style>