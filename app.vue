<template>
    <Articles />
    <footer>
      <h1 class="text-center mt-96 rounded-lg shadow-xl w-96 mx-auto">{{ bar }}</h1>
    </footer>
</template>

<style lang="postcss">

</style>

<script lang="ts" setup>
  import './assets/css/tailwind.css'
  const bar = useFoo()
</script>