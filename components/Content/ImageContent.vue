<template>
  <div class="image-container">
    <h3>{{ content.title }}</h3>
    <p class="image-description">{{ content.description }}</p>
    <img :src="content.url" :alt="content.title" class="image-content" />
  </div>
</template>
  
<script>
export default {
  name: 'ImageContent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
  
  <style scoped>

  .image-description {
    margin-top: 5px;
  }
  
  .image-content {
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 8px; 
    margin-top: 20px;
  }
  </style>
  