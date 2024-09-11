<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link> | 
    <button class="btn btn-primary" @click="logouting">Logout</button>
  </nav>
  <router-view/>
</template>
<script setup>
    import { logout } from '@/services/auth'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    function logouting(){
        logout()
        router.push({ name: 'login' })
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
