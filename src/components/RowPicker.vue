<template>
    <div class="select">
        <select :value="value" @input="change($event.target.value)">
            <option v-for="item in list" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        },

        list: {
            type: Array,
            default: () => [2, 5, 10, 100]
        }
    },

    methods: {
        change(value) {
            this.$emit('input', value)
        }
    }
}
</script>

<style lang="" scoped>

</style>
