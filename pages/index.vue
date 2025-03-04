<template>
  <div class="page-container">
  
    <div class="wrapper-content">
      <div class="content-list">
        <div>
          <h1>Cursos</h1>
        </div>

        <div>

          <CardComponent
            v-for="content in contentList"
            :key="content.id"
            :title="content.title"
            :description="content.description"
            :cover="content.cover"
            :type="content.type"
            :total_likes="content.total_likes"
            @contentClicked="showContentDetail"
            :id="content.id"
          />
        </div>
      
      
      </div>

      <div class="content-selected">  
        <div class="bar-progress">
          <div><h2>Barra de Progresso</h2></div>
          <div> 
            <ProgressBar :progress="progress" />
            <div class="progress-percentage">{{ progress }}% <span>Concluido</span></div>
          </div>
        </div>

        <div class="content-select-wrapper">
          <ContentSelectMobile
            v-if="contentList.length" 
            :contentList="contentList" 
            :selectedContentId="selectedContentId" 
            @contentSelected="showContentDetail"
          />
        </div>

        <div class="content-detail-wrapper"> 
          <div> 
            <ContentDetail v-if="selectedContentId" :contentId="selectedContentId" /> 
          </div>

          <div class="wrapper-btn" > 
            <button class="btn" @click="increaseProgress">Concluir</button> 
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '~/components/CardComponent.vue';
import ContentDetail from '~/components/Content/ContentDetail.vue';
import ContentSelectMobile from '~/components/Content/ContentSelectMobile.vue';
import ProgressBar from '~/components/ProgressBar.vue';

export default {
  components: {
    CardComponent,
    ContentDetail,
    ProgressBar,
    ContentSelectMobile
  },
  data() {
    return {
      contentList: [
        {
          'id': '4372ebd1-2ee8-4501-9ed5-549df46d0eb0',
          'title': 'Introdução à Cultura Tech',
          'description': 'Uma imagem ilustrativa sobre a cultura de trabalho em equipe.',
          'url': 'http://localhost:3000/uploads/image1.jpg',
          'total_likes': 0,
          'type': 'image',
          'cover': 'http://localhost:3000/uploads/image1-cover.jpg',
          'company_id': '5e444e9c-66a9-4004-bde5-db5e614e5c34',
          'created_at': '2025-02-03T22:41:50.798Z'
        },
        {
          'id': '26a42e72-cc93-44b3-acae-01537a36322b',
          'title': 'Ambiente de Trabalho Moderno',
          'description': 'Uma imagem representando espaços colaborativos e inovação nas empresas de tecnologia.',
          'url': 'http://localhost:3000/uploads/image2.png',
          'total_likes': 2,
          'type': 'image',
          'cover': 'http://localhost:3000/uploads/image2-cover.jpg',
          'company_id': '5e444e9c-66a9-4004-bde5-db5e614e5c34',
          'created_at': '2025-02-03T22:41:50.798Z'
        },
        {
          'id': '7acff1c5-4c43-4923-a323-d22a12573041',
          'title': 'Guia de Boas Práticas em Desenvolvimento',
          'description': 'Um documento detalhado sobre boas práticas de programação e metodologias ágeis.',
          'url': 'http://localhost:3000/uploads/pdf1.pdf',
          'total_likes': 4,
          'type': 'pdf',
          'cover': 'http://localhost:3000/uploads/pdf1-cover.jpg',
          'company_id': '5e444e9c-66a9-4004-bde5-db5e614e5c34',
          'created_at': '2025-02-03T22:41:50.798Z'
        },
        {
          'id': '3a5a94aa-17da-4e9a-b493-fe7e81294631',
          'title': 'Manual de Arquitetura de Software',
          'description': 'Um manual técnico abordando padrões arquiteturais e boas práticas para sistemas escaláveis.',
          'url': 'http://localhost:3000/uploads/pdf2.pdf',
          'total_likes': 6,
          'type': 'pdf',
          'cover': 'http://localhost:3000/uploads/pdf2-cover.jpg',
          'company_id': 'c86b4e57-23d8-48f3-9f1d-d9325e5a2ccd',
          'created_at': '2025-02-03T22:41:50.798Z'
        },
        {
          'id': '6969d6c7-40ea-4a3c-b635-d6546b971304',
          'title': 'Plataforma de Aprendizado Online',
          'description': 'Acesse este link para cursos e treinamentos voltados para tecnologia e inovação.',
          'url': 'https://learning.rocks',
          'total_likes': 8,
          'type': 'link',
          'cover': null,
          'company_id': '5e444e9c-66a9-4004-bde5-db5e614e5c34',
          'created_at': '2025-02-03T22:41:50.798Z'
        },
        {
          'id': 'd060ab17-c961-4de7-929f-a0d52aa3ecf4',
          'title': 'Inteligência artificial',
          'description': null,
          'url': 'http://localhost:3000/uploads/video1.mp4',
          'total_likes': 10,
          'type': 'video',
          'cover': 'http://localhost:3000/uploads/video1-cover.jpg',
          'company_id': '5e444e9c-66a9-4004-bde5-db5e614e5c34',
          'created_at': '2025-02-03T22:41:50.798Z'
        }
      ],
      selectedContentId: '4372ebd1-2ee8-4501-9ed5-549df46d0eb0',
      progress: 0
    };
  }, 
  methods: {
    showContentDetail(contentId) {
      this.selectedContentId = contentId;
    },
    increaseProgress() {
      if (this.progress < 90) {
        this.progress += 18; 
      } else if (this.progress == 90) {
        this.progress += 10; 
      }
    }
  }
};

</script>

<style scoped>
.page-container { 
  background-color: var(--background-color); 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

h1 {
  font-size: var(--font-size-title);
}

.wrapper-content {
  display: flex;
  padding: 1.3rem;
  justify-content: space-between;
  align-items: self-start;
  gap: 40px;
}

@media (max-width: 768px) { 
  .wrapper-content {
    padding: 0rem;
  }
}

.content-list {
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 500px;
}

.content-selected {
  width: 100%;
  max-width: 700px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .content-selected {
    max-width: 100%;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .content-select-wrapper {
    display: block;
  }
  
  .content-list {
    display: none;
  }
}

@media (min-width: 769px) {
  .content-select-wrapper {
    display: none;
  }
}

.wrapper-btn {
  margin-top: 45px;
}

.bar-progress, .content-detail-wrapper {
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 1.3rem;
  width: 700px;
}

@media (max-width: 768px) {
  .bar-progress, .content-detail-wrapper {
    width: 95%; 
    max-width: 100%; 
    padding: 1rem;
  }
}

.content-detail-wrapper {
  margin-top: 52px;
}


.bar-progress h2 {
  font-size: var(--font-size-title);
}

.progress-percentage {
  margin: 10px;;
}

</style>
