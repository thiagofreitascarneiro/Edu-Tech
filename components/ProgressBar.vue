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
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    margin-top: 1em;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--color-primary);
    transition: width 0.3s ease-in-out;
  }
  </style>
  