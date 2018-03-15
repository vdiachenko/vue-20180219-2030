<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Edit</h1>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent">
                <user-card :user="this.user" @submit="save"></user-card>
            </div>

            <div class="tile is-parent">
                <div class="tile is-child box">
                    <user-form :user="this.user" @submit="save"></user-form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        user: {}
    }),

    components: {
        'user-form': () => import('@/components/UserForm.vue'),
        'user-card': () => import('@/components/UserCard.vue')
    },

    mounted() {
        this.fetchData()
    },

    computed: {
        url() {
            return `${SERVICE_URL}/users/${this.$route.params.id}`
        },

        hasData() {
            return Object.keys(this.user).length
        }
    },

    methods: {
        fetchData() {
            axios.get(this.url).then(({ data }) => {
                this.user = data
            })
        },

        save(cb) {
            axios
                .patch(this.url, this.user)
                .then(({ data }) => {
                    this.user = data
                    this.$router.push({ path: '/users' })
                })
                .then(cb)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
