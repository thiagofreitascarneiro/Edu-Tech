<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Erro ao carregar conteúdo</div>
  <div v-else>
    <h2>{{ content.title }}</h2>
    <p>{{ content.description }}</p>
    <p>Format: {{ content.format }}</p>
    <p>Created at: {{ content.created_at }}</p>
  
    <div v-if="content.type === 'image'">
      <img :src="content.url" :alt="content.title" />
    </div>
    <div v-else-if="content.type === 'pdf'">
      <a :href="content.url" target="_blank">Abrir PDF</a>
    </div>
    <div v-else-if="content.type === 'video'">
      <video controls :src="content.url"></video>
    </div>
    <div v-else-if="content.type === 'link'">
      <a :href="content.url" target="_blank">Acessar conteúdo</a>
    </div>
  </div>
</template>
  
<script>
import { gql } from 'apollo-boost';
  
export default {
  name: 'ContentDetail',
  props: {
    contentId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: null,
      loading: true,
      error: null
    };
  },
  watch: {
    contentId: 'fetchContent'
  },
  methods: {
    async fetchContent() {
      try {
        this.loading = true;
        const { data } = await this.$apollo.query({
          query: gql`
              query {
                provision(content_id: "${this.contentId}") {
                  id
                  title
                  description
                  url
                  created_at
                  allow_download
                  is_embeddable
                  format
                  bytes
                  metadata
                }
              }
            `
        });
        this.content = data.provision;
        this.loading = false;
      } catch (err) {
        this.error = 'Erro ao carregar os dados';
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchContent();
  }
};
</script>
  