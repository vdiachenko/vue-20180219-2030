<template>
    <section class="section">
        <div class="container">
            <h1 class="title">New user</h1>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent">
                <user-card :user="this.user" @submit="save"></user-card>
            </div>

            <div class="tile is-parent">
                <div class="tile is-child box">
                    <user-form :user="this.user" @submit="save">
                        <div class="buttons" slot="buttons">
                            <button type="submit" class="button is-success" :class="{ 'is-loading': inProgress }">Create</button>
                            <button type="button" class="button is-danger" @click="reset">Reset</button>
                        </div>
                    </user-form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

const defaultUser = {
    id: null,
    guid: '',
    isActive: false,
    balance: '',
    picture: 'http://placehold.it/416x348',
    age: 0,
    eyeColor: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    registered: new Date()
}

export default {
    data: () => ({
        user: defaultUser,
        inProgress: false
    }),

    components: {
        'user-form': () => import('@/components/UserForm.vue'),
        'user-card': () => import('@/components/UserCard.vue')
    },

    computed: {
        url() {
            return `${SERVICE_URL}/users/`
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

        save() {
            this.inProgress = true

            axios.post(this.url, this.user).then(({ data }) => {
                this.$router.push({ path: '/edit/' + data.id })
            })
        },

        reset() {
            this.user = defaultUser
        }
    }
}
</script>

<style lang="less" scoped>

</style>
