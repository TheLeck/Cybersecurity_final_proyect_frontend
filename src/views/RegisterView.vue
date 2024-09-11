<template>
    
    <h1>Crear cuenta</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="inputEmailRegister" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmailRegister" placeholder="Enter email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="inputPasswordRegister" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPasswordRegister" placeholder="Enter password" v-model="password"> 
            </div>

            <button type="button" class="btn btn-primary mt-3" @click="regis">Registrarme</button>
        </form>
    </div>
</template>



<script setup>
import { ref } from 'vue'
import { register } from '@/services/auth'
import { useRouter } from 'vue-router'
import { useReCaptcha } from 'vue-recaptcha-v3'
//import ReCaptcha from '@/components/ReCaptcha.vue'

const email = ref('')  
const password = ref('')

const router = useRouter()
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

async function regis(){
    // (opcional) Espera hasta que se haya cargado reCAPTCHA.
    await recaptchaLoaded()

    // Ejecuta reCAPTCHA con la acción "login".
    const tokenReCaptcha = await executeRecaptcha('register')

    try {       //pedimos registro
        const response = await register(email.value, password.value, tokenReCaptcha)
        if (response.token) {
            alert('Register successful')
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