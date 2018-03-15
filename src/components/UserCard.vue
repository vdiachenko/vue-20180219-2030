<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <avatar-uploader v-model="user.picture"/>
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="user.picture" :alt="formattedUsername">
                    </figure>
                </div>

                <div class="media-content">
                    <p class="title is-4">{{ fullname }}</p>
                    <p class="subtitle is-6">{{ formattedUsername }}</p>
                </div>
            </div>

            <div class="content">
                {{ user.about }} <a>{{ formattedCompany }}</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time :datetime="user.registered">{{ user.registered }}</time>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        inProgress: false
    }),

    components: {
        'avatar-uploader': () => import('@/components/AvatarUploader.vue')
    },

    props: {
        user: {
            type: Object,
            required: true
        }
    },

    computed: {
        fullname() {
            return `${this.user.firstName} ${this.user.lastName}`
        },

        formattedUsername() {
            return `@${this.user.firstName}${this.user.lastName}`.toLowerCase()
        },

        formattedCompany() {
            return `@${this.user.company}`.toLowerCase()
        }
    }
}
</script>

<style lang="less" scoped>
.image {
    overflow: hidden;
}
</style>
