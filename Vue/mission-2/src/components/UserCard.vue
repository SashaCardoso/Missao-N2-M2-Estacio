<script setup>
    const props = defineProps(['user']);
</script>

<template>
    <div class="d-flex  flex-column align-items-center bg-light p-2 mx-2">
        <img :src="props.user.avatar" class="image">
        <br>
        <h3>{{ props.user.first_name + " " + props.user.last_name }}</h3>
        <br>
        <p>{{ props.user.email }}</p>
        

    </div>
</template>

<style scoped>
    .image {
        width: 15vw;
    }
</style>