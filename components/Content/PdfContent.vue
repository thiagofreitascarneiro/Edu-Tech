<template>
  <div class="pdf-content">
    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>

    <div class="pdf-buttons"> 

      <a :href="content.url" target="_blank" class="btn-view-pdf">Abrir PDF</a>
    </div>

    <div v-if="content.url" class="pdf-viewer">
      <iframe 
        :src="content.url" 
        frameborder="0" 
        width="100%" 
        height="500px">
      </iframe>
    </div>
   
  </div>
</template>
  
<script>
export default {
  name: 'PdfContent',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
};
</script>
  
  <style scoped>
  .pdf-content {
    margin-top: 20px;
    padding: 20px;
    background-color: var(--color-light);
    border-radius: 8px;
  }
  
  .pdf-content h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .pdf-viewer {
    margin-top: 15px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    overflow: hidden;
  }

  .pdf-buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .btn-toggle-view {
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1.3rem;
  }

  .btn-toggle-view:hover {
    background-color: var(--color-secondary);
  }
  
   .btn-view-pdf 
   {
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    background-color: var(--color-secondary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1.3rem;
  }
  
  </style>
  