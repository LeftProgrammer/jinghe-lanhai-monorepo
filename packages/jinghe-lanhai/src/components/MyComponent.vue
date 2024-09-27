<template>
    <div class="my-component">
      <h1>{{ title }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MyComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .my-component {
    font-family: Arial, sans-serif;
    color: #333;
  }
  </style>
  