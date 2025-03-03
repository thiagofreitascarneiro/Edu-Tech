<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Erro ao carregar conteúdo</div>

  <div v-else>
    <!-- <h2>{{ content.title }}</h2>
    <p>{{ content.description }}</p>
    <p>Conteúdo: {{ content.format }}</p> -->

    <VideoContent v-if="content.format === 'mp4'" :content="content" />

    <!-- Exibição de imagem -->
    <div v-else-if="content.format === 'image'">
      <img :src="content.url" :alt="content.title" />
    </div>

    <!-- Exibição de PDF -->
    <div v-else-if="content.format === 'pdf'">
      <a :href="content.url" target="_blank">Abrir PDF</a>
    </div>

    <!-- Exibição de links -->
    <div v-else-if="content.format === 'link'">
      <a :href="content.url" target="_blank">Acessar conteúdo</a>
    </div>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
import VideoContent from './VideoContent.vue';

export default {
  name: 'ContentDetail',
  components: {
    VideoContent
  },
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

      if (!this.contentId) return;
      try {
        this.loading = true;
        const { data } = await this.$apollo.query({
          query: gql`
        query ($id: String!) {
          provision(content_id: $id) {
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
      `,
          variables: {
            id: this.contentId
          }
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
    console.log(this.content, this.contentId, 'caiu nno created');
    this.fetchContent();
  }
};
</script>
