<template>
  <Loader v-if="loading" />

  <div v-else-if="error">Erro ao carregar conteúdo</div>

  <div v-else>

    <VideoContent v-if="content.format === 'mp4'" :content="content" />

    <ImageContent v-else-if="content.format === 'jpg' || content.format === 'png'" :content="content" />

    <PdfContent v-else-if="content.format === 'pdf'" :content="content" />

    <LinkContent v-else-if="!content.format && content.url" :content="content" />
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';
import ImageContent from './ImageContent.vue';
import LinkContent from './LinkContent.vue';
import Loader from './Loader.vue';
import PdfContent from './PdfContent.vue';
import VideoContent from './VideoContent.vue';

export default {
  name: 'ContentDetail',
  components: {
    VideoContent,
    PdfContent,
    ImageContent,
    LinkContent,
    Loader
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
