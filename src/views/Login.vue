<script>
import academiaHeader from '../components/header.vue'
import academiaLogin from '../components/login.vue'
export default {
    name:'Home',
    components: {
        academiaHeader,
        academiaLogin
    }
}
</script>

<template>
    <academiaHeader/>
    <div class="w-25 m-auto">
        <academiaLogin/>
    </div>
</template>