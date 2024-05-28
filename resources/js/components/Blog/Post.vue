<script>
    export default {
        name: "Blog",
        data: () => ({
            link: '',
        }),
        mounted() {
            this.link = `posts/${this.id}`;
        },
        props: {
            id: {
                type: Number,
                default: 0,
            },
            title: {
                type: String,
                default: 'NULL',
            },
            body: {
                type: String,
                default: 'NULL',
            },
            date: {
                type: String,
                default: 'NULL',
            },
        }
    }
</script>

<template>
    <div class="uk-card uk-card-default uk-width-1-2@m">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{{ title }}</h3>
                    <p class="uk-text-meta uk-margin-remove-top">
                        <time datetime="2016-04-01T19:00">{{ date }}</time>
                    </p>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p>{{ body }}</p>
        </div>
        <div class="uk-card-footer">
            <router-link :to="this.link" class="uk-button uk-button-primary">
                Подробнее
            </router-link>
        </div>
    </div>
</template>

<style scoped>

</style>
