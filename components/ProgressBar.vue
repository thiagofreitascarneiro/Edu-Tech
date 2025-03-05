<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>
  
<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>
  
  <style scoped>
  .progress-container {
    width: 95%;
    max-width: 100%;
    height: 10px;
    background-color: var(--color-bar);
    border-radius: 5px;
    margin-top: 1em;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--color-primary);
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .progress-container {
      height: 8px;
      margin-top: 0.8em;
    }
  }

  @media (min-width: 1024px) {
    .progress-container {
      height: 12px;
    }
  }
  </style>
  