<script>
import Spin from '../components/Spin.vue';

export default {
    name: "Post",
    components: {
        Spin,
    },
    data: () => ({
        loading: true,
        post: null,
        notFound: false,
        deleted: false,
        link: '',
    }),
    mounted() {
        this.loadPost();
        this.link = `/posts/${this.$route.params.id}/edit`;
    },
    methods: {
        loadPost() {
            axios.get(`/api/posts/${this.$route.params.id}`)
                .then((res) => {
                    this.loading = false;
                    this.post = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                    this.loading = false;
                    this.notFound = true;
                })
        },

        deleteLink() {
            axios.delete(`/api/posts/${this.$route.params.id}`)
                .then(res => {
                    this.deleted = true;
                })
        }
    }
}
</script>

<template>
    <div>
        <spin v-if="this.loading"></spin>
        <div v-else-if="!this.loading && !this.notFound && !this.deleted">
            <div class="uk-section">
                <div class="uk-container">
                    <article class="uk-article">
                        <h1 class="uk-article-title">{{ this.post.title }}</h1>
                        <p class="uk-article-meta">{{ this.post.created_at }}</p>
                        <p class="uk-text-lead">{{ this.post.body }}</p>
                        <div class="uk-grid-small uk-child-width-auto" uk-grid>
                            <p uk-margin>
                                <router-link :to="this.link" class="uk-button uk-button-primary">
                                    Обновить
                                </router-link>
                                <a href="javascript:void(0)" @click.prevent="deleteLink" class="uk-button uk-button-danger">
                                    Удалить
                                </a>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <div v-else-if="this.notFound && !this.deleted">
            <h1>This post not found</h1>
        </div>
        <div v-else-if="this.deleted">
            <h1>This post is deleted</h1>
        </div>
    </div>
</template>

<style scoped>

</style>
