<template>
  <div class="pdf-content">
    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>
  
    <!-- Link para abrir o PDF -->
    <a :href="content.url" target="_blank" class="btn-view-pdf">Abrir PDF</a>
  
    <!-- Link para download, se permitido -->
    <div v-if="content.allow_download">
      <a :href="content.url" download :title="'Download ' + content.title" class="btn-download-pdf">Baixar PDF</a>
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
  }
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
  
  .pdf-content .btn-view-pdf,
  .pdf-content .btn-download-pdf {
    display: inline-block;
    margin: 5px 0;
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
  
  .pdf-content .btn-view-pdf:hover,
  .pdf-content .btn-download-pdf:hover {
    background-color: var(--color-primary-dark);
  }
  </style>
  