<template>
  <div class="container">
    <div class="card" v-for="item of herois" :key="key">
      <img :src="getImagem(item.thumbnail)" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.desc }}</p>
      <button @click="details(item.id)">Detalhes...</button>
    </div>
    
  </div>
</template>

<script>
import apiService from '../api/marvel.js';

export default {
  name: 'hero',
  data() {
    return {
      herois: []
    }
  },
  methods: {
    getImagem: (img) => {
        return img.path + '/portrait_medium.jpg';
    },
    details(id) {
      apiService.getById(10, retorno => {
        this.herois = retorno.data.data.results;
      }, id)
    }
  },
  created() {
    apiService.getAllComics(10, retorno => {
      this.herois = retorno.data.data.results;
    })
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
}

.card {
  float: left;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid #323232;
}

.add { 
  position: fixed;
  border: 0;
  background: #41B883;
  border-radius: 50%;
  color: #fff;
  padding: 10px;
  bottom: 25px;
  right: 25px;
  width: 35px;
  height: 35px;
}
</style>
