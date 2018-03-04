<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view class="container"/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
    name: 'App',
    components: { NavBar }
}
</script>

<style lang="less">
@import '../node_modules/bulma/css/bulma.css';
</style>
