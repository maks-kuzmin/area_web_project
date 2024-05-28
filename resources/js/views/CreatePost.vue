<script>
import axios from 'axios';

export default {
    name: "CreatePost",
    data: () => ({
        form: {
            title: '',
            body: '',
        },
        loading: false,
        error: false,
    }),
    methods: {
        store() {
            this.loading = true;
            this.error = false;
            axios.post("/api/posts", this.form, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(res => {
                    this.loading = false;
                    this.error = false;
                    if (res.data.success === true) {
                        console.log('РАБОТАЕТ!');
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
                    <input class="uk-input" v-model="form.title" type="text" placeholder="Заголовок">
                </div>

                <div class="uk-margin">
                    <textarea class="uk-textarea" v-model="form.body" rows="5" placeholder="Содержимое"></textarea>
                </div>

                <button class="uk-button uk-button-primary" @click.prevent="store">
                    <div uk-spinner v-if="loading"></div>
                    <span v-else>Опубликовать</span>
                </button>
            </fieldset>

        </form>
    </div>
</template>

<style scoped>

</style>
