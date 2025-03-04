<template>
  <div class="content-select">
    <label for="content-dropdown">Selecione um conteúdo:</label>
    <select id="content-dropdown" v-model="selected" @change="emitSelection">
      <option v-for="content in contentList" :key="content.id" :value="content.id">
        {{ content.title }}
      </option>
    </select>
  </div>
</template>
  
<script>
export default {
  props: {
    contentList: Array,
    selectedContentId: String,
  },
  data() {
    return {
      selected: this.selectedContentId || '',
    };
  },
  methods: {
    emitSelection() {
      this.$emit('contentSelected', this.selected);
    },
  },
};
</script>
  
  <style scoped>
  .content-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
  }
  
  label {
    font-size: 18px;
    font-weight: bold;
  }
  
  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background: var(--color-white);
  }
  </style>
  