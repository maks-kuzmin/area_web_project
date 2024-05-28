<script>
import Spin from "../components/Spin.vue";
import Post from "../components/Blog/Post.vue"
import axios from "axios";
export default {
    name: 'Blog',
    components: {
        Spin,
        Post
    },
    data: () => ({
        loading: true,
        posts: [],
    }),
    mounted() {
        this.loadPosts()
    },
    methods: {
        loadPosts() {
            axios.get("/api/posts")
                .then((res) => {
                    this.loading = false;
                    this.posts = res.data;
                })
        }
    },
}
</script>

<template>
    <div>
        <spin v-if="loading"></spin>
        <div style="display:flex; flex-wrap: wrap;">
            <post v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body" :date="post.created_at"></post>
        </div>
    </div>
</template>

<style scoped>
.uk-card {
    width: 40%;
    margin-right: 20px;
    margin-bottom: 20px;
}

.uk-card:last-child {
    margin-right: 0;
}
</style>
