<template>
    <div>
        <row-picker v-model.number="rowsPerPage"></row-picker>

        <table class="table">
            <thead>
                <slot name="head"></slot>
            </thead>
    
            <tbody>
                <tr v-for="item in filteredRows" :key="item.id">
                    <slot name="row" v-bind="item"></slot>
                </tr>
            </tbody>
        </table>

        <pager :total="totalRows" :per-page="rowsPerPage" v-model.number="currentPage"></pager>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        list: [],
        rowsPerPage: 2,
        currentPage: 1
    }),

    components: {
        pager: () => import('@/components/Pager.vue'),
        'row-picker': () => import('@/components/RowPicker.vue')
    },

    props: {
        url: {
            type: String,
            required: true
        }
    },

    computed: {
        totalRows() {
            return this.list.length
        },

        filteredRows() {
            return this.list.filter((item, index) => {
                const startIndex = (this.currentPage - 1) * this.rowsPerPage
                const finalIndex = startIndex + this.rowsPerPage

                return startIndex <= index && index < finalIndex
            })
        }
    },

    mounted() {
        this.fetchData()
    },

    watch: {
        rowsPerPage() {
            this.currentPage = 1
        }
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
