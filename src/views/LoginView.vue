<template>
    <h1>Iniciar sesion</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="inputEmailLogin" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmailLogin" placeholder="Enter email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="inputPasswordLogin" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPasswordLogin" placeholder="Enter password" v-model="password"> 
            </div>

            <p class="mt-3">Don't have an account? <router-link :to="{ name: 'register' }">Register</router-link></p>
            <button type="button" class="btn btn-primary mt-3" @click="logining">Login</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const email = ref('')
    const password = ref('')
    import { login } from '@/services/auth'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    async function logining(){
        try {
            const response = await login(email.value, password.value)
            if (response.token) {
                alert('Login successful')
                router.push({ name: 'home' })
            } else if (!response) {
                alert('Invalid email or password')
            }
        } catch (error) {
            console.log(error)
        }
    }

</script>

<style scoped>
</style>