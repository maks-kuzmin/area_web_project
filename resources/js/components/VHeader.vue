<script>
    export default {
        data() {
            return {
                links: [
                    {
                        title: 'Главная',
                        href: '/'
                    },
                    {
                        title: 'Блог',
                        href: '/posts'
                    },
                    {
                        title: 'Создание поста',
                        href: '/posts/create'
                    }
                ]
            }
        }
    }
</script>

<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">

            <ul class="uk-navbar-nav">
                <li v-for="link in links">
                    <router-link :to="link.href">{{ link.title }}</router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style scoped>

</style>
