<template>
  <div class="link-content">
    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>
    <a :href="content.url" target="_blank" class="btn-view-link">Acessar Conteúdo</a>
  </div>
</template>
  
<script>
export default {
  name: 'LinkContent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
  
  <style scoped>
  .link-content {
    margin-top: 20px;
    padding: 20px;
    background-color: var(--color-light);
    border-radius: 8px;
  }
  
  .link-content h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .btn-view-link {
    display: inline-block;
    margin-top: 1.3rem;
    padding: 10px 20px;
    background-color: var(--color-secondary);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
  
  .btn-view-link:hover {
    background-color: var(--color-primary);
  }
  </style>
  