<script setup>
import { onMounted, ref } from 'vue';
import UserCard from './UserCard.vue';

const users = ref([]);

onMounted(async () => { 
    const url = "https://reqres.in/api/users?per_page=10";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        users.value = json.data;
    } catch (error) {
        console.error(error.message);
    }
});
</script>

<template>
    <div class="d-flex flex-row flex-wrap">
        <div v-for="user in users">
            <div>
                <UserCard :user="user" />
            </div>
        </div>
    </div>
</template> 

<style scoped>
</style>