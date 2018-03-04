<template>
    <table class="table">
        <thead>
            <slot name="head"></slot>
        </thead>
  
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <slot name="row" v-bind="item"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        list: []
    }),

    props: {
        url: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.fetchData()
    },

    methods: {
        fetchData() {
            axios.get(this.url).then(({ data }) => {
                this.list = data
            })
        }
    }
}
</script>

<style lang="" scoped>

</style>
