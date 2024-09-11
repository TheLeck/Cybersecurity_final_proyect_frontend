<template>
    <h3>Add Note</h3>
    <div class="mx-auto container">
        <div class="input-group">
            <input type="text" v-model="noteTitle" class="form-control" placeholder="Titulo de la nota"/>
            <div class="input-group-append">
                <button class="btn btn-primary" @click="saveNote">Save</button>
            </div>
        </div>
        <div class="input-group">
            <textarea v-model="content" class="form-control" placeholder="Contenido de la nota"/>
            
        </div>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue'
    //import { useRoute } from 'vue-router'
    import NoteService from '@/services/NoteService.js'
    
    const sevice = new NoteService()
    //const router = useRoute()
   
    const noteTitle = ref('')
    const content = ref('')

    const saveNote = () => {
        console.log(noteTitle.value, content.value, localStorage.getItem('userId'))
        const response = sevice.createNote(noteTitle.value, content.value, localStorage.getItem('userId'))
        if(response){
            alert('Nota creada con éxito')
            window.location.href = "http://localhost:8080/"
        } else {
            alert('Error al crear la nota')
        }
    }


</script>

<style scoped>
</style>