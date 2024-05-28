<script>
import axios from 'axios';

export default {
    name: "CreatePost",
    data: () => ({
        title: '',
        body: '',
        loading: false,
        error: false,
    }),
    mounted() {
        this.getDataPost();
    },
    methods: {
        getDataPost() {
            axios.get(  `/api/posts/${this.$route.params.id}`)
                .then( res => {
                    this.title = res.data.data.title;
                    this.body = res.data.data.body;
                })
                .catch(e => {
                    console.log(e)
                })
        },
        uploadPost() {
            this.loading = true;
            this.error = false;
            console.log(this.title);
            console.log(this.body);
            axios.patch(`/api/posts/${this.$route.params.id}`,
                {
                    title: this.title,
                    body: this.body,
                }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(res => {
                    this.loading = false;
                    if (res.data.success === true) {
                        this.$router.push('/posts');
                    }
                })
                .catch(e => {
                    this.loading = false;
                    this.error = true;
                    console.log(e);
                })
        }
    }
}
</script>

<template>
    <div>
        <div class="uk-alert-danger" uk-alert v-if="error">
            <a class="uk-alert-close" uk-close></a>
            <p>Проверьте правильность введенный полей</p>
        </div>
        <form style="margin-bottom: 20px;">
            <fieldset class="uk-fieldset">
                <legend class="uk-legend">Опубликовать пост</legend>
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Заголовок"  v-model="title">
                </div>
                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Содержимое" v-model="body"></textarea>
                </div>
                <button class="uk-button uk-button-primary" @click.prevent="uploadPost">
                    <div uk-spinner v-if="loading"></div>
                    <span v-else>Сохранить</span>
                </button>
            </fieldset>

        </form>
    </div>
</template>

<style scoped>

</style>
