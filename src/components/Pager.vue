<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous" @click.prevent="prevPage" :disabled="page === 1">Prev</a>
        <a class="pagination-next" @click.prevent="nextPage" :disabled="page === this.totalPages">Next</a>
        
        <ul class="pagination-list">
            <li v-for="item in totalPages" :key="item">
                <a class="pagination-link" :class="{ 'is-current': item === page }" @click.prevent="selectPage(item)">{{ item }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    model: {
        prop: 'page'
    },

    props: {
        page: {
            type: Number,
            required: true
        },

        perPage: {
            type: Number,
            required: true
        },

        total: {
            type: Number,
            required: true
        }
    },

    computed: {
        totalPages() {
            return Math.ceil(this.total / this.perPage)
        }
    },

    methods: {
        selectPage(page) {
            this.$emit('input', page)
        },

        prevPage() {
            const page = this.page - 1

            if (page > 0) {
                this.selectPage(page)
            }
        },

        nextPage() {
            const page = this.page + 1

            if (page <= this.totalPages) {
                this.selectPage(page)
            }
        }
    }
}
</script>

<style lang="" scoped>

</style>
