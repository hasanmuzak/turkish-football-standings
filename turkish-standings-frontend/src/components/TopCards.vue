<template>
  <div>
       <div v-for="(item,index) in data" :key="index" class="flex justify-between items-center p-2 transition duration-300 hover:bg-indigo-100">
           <div class="flex flex-col">
               <span class="capitalize name text-gray-700">{{index+1}}. {{item.isim}}</span>
           </div>
           <div>
               <span class="score">{{item.kart_sayisi}}</span>
           </div>
       </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    fetchScores() {
      axios
        .get("/kirmizi-kart/super-lig")
        .then((response) => {
          this.data = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchScores();
  },
};
</script>

<style scoped>
.name {
    font-size: 11px;
    font-weight: 600;
}
.score{
    font-size: 11px;
    font-weight: 600;
    color: #5f5f5f;
}
</style>