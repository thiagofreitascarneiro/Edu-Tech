<template>
  <div v-if="content.format === 'mp4'">

    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>
    <video
      controls
      :src="content.url"
      :alt="content.title"
      :title="content.title"
      class="video-content"
    ></video>
   
    <p class="content-format">Conteúdo: {{ content.format }}</p>
  
    <div  v-if="content.metadata">
      <p><strong>Duração:</strong> {{ content.metadata.duration }} segundos</p>
      <p><strong>Resolução:</strong> {{ content.metadata.resolution }}</p>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'VideoContent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
    
  <style scoped>
  .video-content {
    max-width: 100%;
    width: 600px;
    max-height: 400px; 
    border-radius: 8px;
    margin-bottom: 1em;
  }

  .content-format {
    margin-top: 10px;
  }
  
  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 15px;
    font-size: var(--font-size-subtitle);
  }
  
  p {
    font-size: 1rem;
    color: var(--color-paragraph);
  }
  
  @media (max-width: 768px) {
    .video-content {
      max-width: 100%;
      width: 100%;
    }
  
    video {
      max-width: 100%;
    }
  
    h3 {
      font-size: 1.25rem;
    }
  
    p {
      font-size: 0.9rem;
    }
  }
  </style>
  