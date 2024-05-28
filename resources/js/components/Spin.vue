<script>
    export default {
        name: "Spin",
    }
</script>

<template>
    <div uk-spinner class="spin"></div>
</template>

<style scoped>
.spin {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
