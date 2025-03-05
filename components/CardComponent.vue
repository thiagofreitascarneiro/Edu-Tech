<template>
  <div class="card">
    <div class="card-image">
      <img :src="cover || require('@/assets/image/uol-edtech.webp')" :alt="title" />
    </div>
    <div class="card-content">
      <div class="badge">{{ translateType(type) }}</div>
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-description" v-if="description">{{ description }}</p>
      
      <div class="card-footer">
        <div class="likes">👍 {{ total_likes }} </div>
        <a href="#" @click.prevent="handleClick" class="learn-more">
          Clique Aqui
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'CardComponent',
  props: {
    title: String,
    description: String,
    cover: String,
    type: String,
    total_likes: Number,
    id: String
  },
  methods: {
    handleClick() {
      this.$emit('contentClicked', this.id);
    },
    translateType(type) {
      const translations = {
        image: 'imagem',
        video: 'vídeo',
        pdf: 'PDF',
        link: 'link'
      };
      return translations[type] || type;
    }
  }
  
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  box-shadow: var(--shadow);
  border-radius: 8px;
  width: 100%;
  max-width: 620px;
  margin: 16px auto;
  overflow: hidden; 
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}

.card-image {
  flex: 1.5;
  overflow: hidden;
  min-height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

@media (min-width: 768px) {
  .card-image img {
    border-radius: 8px 0 0 8px;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 16px;
}

.badge {
  display: inline-flex;
  align-items: center; 
  background: var(--color-primary);
  color: var(--color-white);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 8px;
  max-width: fit-content; 
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.likes {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

.learn-more {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.learn-more:hover {
  text-decoration: underline;
}

.icon {
  width: 16px;
  height: 16px;
  margin-left: 6px;
}
</style>



