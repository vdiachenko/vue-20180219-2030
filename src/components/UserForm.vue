<template>
    <form action="/" @submit.prevent="onSubmit">
        <div class="field">
            <label class="label">First Name</label>

            <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="user.firstName">
            </div>
        </div>

        <div class="field">
            <label class="label">Last Name</label>

            <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="user.lastName">
            </div>
        </div>

        <div class="field">
            <label class="label">Age</label>

            <div class="control">
                <input class="input" type="text" placeholder="Age" v-model="user.age">
            </div>
        </div>

        <div class="field">
            <label class="label">Active</label>

            <div class="control">
                <label class="radio">
                    <input type="radio" name="active" value="true" v-model="user.isActive">
                    Yes
                </label>

                <label class="radio">
                    <input type="radio" name="active" value="false" v-model="user.isActive">
                    No
                </label>
            </div>
        </div>

        <div class="field">
            <label class="label">Balance</label>

            <div class="control">
                <input class="input" type="text" placeholder="Balance" v-model="user.balance">
            </div>
        </div>

        <div class="field">
            <label class="label">E-mail</label>

            <div class="control">
                <input class="input" type="email" placeholder="E-mail" v-model="user.email">
            </div>
        </div>

        <div class="field">
            <label class="label">Phone</label>

            <div class="control">
                <input class="input" type="tel" placeholder="Phone" v-model="user.phone">
            </div>
        </div>

        <div class="field">
            <label class="label">Registered</label>

            <div class="control">
                <input class="input" type="text" placeholder="Registered" readonly v-model="user.registered">
            </div>
        </div>

        <div class="buttons">
            <button type="submit" class="button is-success" :class="{ 'is-loading': inProgress }">Save</button>
            <button type="button" class="button is-danger">Delete</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        inProgress: false
    }),

    props: {
        user: {
            type: Object,
            required: true
        }
    },

    mounted() {},

    methods: {
        onSubmit() {
            this.inProgress = true
            this.$emit('submit', () => (this.inProgress = false))
        }
    }
}
</script>

<style lang="" scoped>

</style>
