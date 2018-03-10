<template>
    <section class="section">
        <div class="container">
            <h1 class="title">User Edit</h1>
        </div>

        <user-form :user="this.user" @submit="onSubmit"></user-form>
    </section>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
    data: () => ({
        user: {}
    }),

    components: { UserForm },

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

        onSubmit(cb) {
            axios
                .patch(this.url, this.user)
                .then(({ data }) => {
                    this.user = data
                })
                .then(cb)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
