<script setup>
  import CardList from './components/CardList.vue';   
</script>

<template>
  <header>
  </header>

  <main>
    <div class="d-flex  flex-column align-items-center">
      <h1>Usuarios de Teste via REST</h1>
      <h3 class="light">Os usuários deste exemplo são fornecidos pela API de testes reqres.in</h3>
      <CardList />
    </div>
  </main>
</template>

<style scoped>
  .light {
    color: white;
    font-style: italic;
  }
</style>
