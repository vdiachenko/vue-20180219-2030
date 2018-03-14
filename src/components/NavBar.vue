<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" tag="a" class="navbar-item" active-class="is-active" exact>Home</router-link>
            <router-link to="/users" tag="a" class="navbar-item" active-class="is-active">Users</router-link>
            
            <div class="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="" scoped>

</style>
