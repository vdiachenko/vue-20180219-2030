<template>
    <div class="avatar">
        <img :src="picture" class="avatar__img">

        <div class="file has-name is-fullwidth">
            <label class="file-label">
                <input class="file-input" type="file" name="resume" @change="upload">
                
                <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">Choose a file…</span>
                </span>
                
                <span class="file-name">{{ picture }}</span>
            </label>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({}),

    model: {
        prop: 'picture'
    },

    props: {
        picture: {
            type: String,
            required: true
        }
    },

    methods: {
        upload({ target }) {
            const url = 'https://api.imgur.com/3/image'
            const data = new FormData()

            data.append('image', target.files[0])

            const config = {
                headers: {
                    Authorization: 'Client-ID f58f55d11ca5ac3'
                }
            }

            axios.post(url, data, config).then(res => {
                target.value = ''
                this.updateAvatar(res.data.data.link)
            })
        },

        updateAvatar(url) {
            this.$emit('input', url)
        }
    }
}
</script>

<style lang="less" scoped>
.avatar {
    &__img {
        object-fit: cover;
        object-position: top;
    }
}
</style>
