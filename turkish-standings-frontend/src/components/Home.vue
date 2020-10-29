<template>
  <div>
    <div class="container mx-auto mt-4">
      <at-tabs @on-change="fetchStand" size="small" :animated="false">
        <at-tab-pane label="Süper Lig" name="super-league">
          <div class="grid grid-cols-3 mt-2 mb-4">
            <div v-if="loading === false" class="mr-3 border rounded">
              <h3 class="font-semibold text-gray-700 p-2 standing-title">
                <i class="fas fa-crown mr-2 text-yellow-500"></i>Gol Kralları
              </h3>
              <TopScores :league="league"></TopScores>
            </div>
            <div v-if="loading === false" class="mr-3 border rounded">
              <h3 class="font-semibold text-gray-700 p-2 standing-title">
                <i class="fas fa-crown mr-2 text-yellow-500"></i>Asist Kralları
              </h3>
              <TopAssists></TopAssists>
            </div>
            <div v-if="loading === false" class="border rounded">
              <h3 class="font-semibold text-gray-700 p-2 standing-title">
                <i class="fas fa-sticky-note mr-2 text-red-600"></i>Kırmızı Kart
                Listesi
              </h3>
              <TopCards></TopCards>
            </div>
            <div
              v-if="loading === true"
              class="mr-3 loading-top-scores flex flex-col justify-between"
            >
              <div class="loading-top-item-other"></div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
            </div>
            <div
              v-if="loading === true"
              class="mr-3 loading-top-scores flex flex-col justify-between"
            >
              <div class="grid grid-cols-2">
                <div class="loading-top-item-other mr-2"></div>
                <div class="loading-top-item-other"></div>
              </div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
            </div>
            <div
              v-if="loading === true"
              class="loading-top-scores flex flex-col justify-between"
            >
              <div class="loading-top-item-other"></div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
              <div class="loading-top-item"></div>
            </div>
          </div>
          <h3 class="font-semibold text-gray-700 my-2 standing-title">
            <i class="far fa-futbol mr-2"></i>Süper Lig Puan Durumu
          </h3>
          <div
            v-if="loading === true"
            class="loading-table flex flex-col justify-between"
          >
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
          </div>
          <at-table
            v-if="loading === false"
            class="mb-4"
            stripe
            size="small"
            border
            :columns="columns"
            :data="data"
          ></at-table>
        </at-tab-pane>
        <at-tab-pane label="1.Lig" name="first-league">
          <h3 class="font-semibold text-gray-700 my-2 standing-title">
            <i class="far fa-futbol mr-2"></i>1. Lig Puan Durumu
          </h3>
          <div
            v-if="loading === true"
            class="loading-table flex flex-col justify-between"
          >
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
          </div>
          <at-table
            v-if="loading === false"
            class="mb-4"
            stripe
            size="small"
            border
            :columns="columns"
            :data="data"
          ></at-table>
        </at-tab-pane>
        <at-tab-pane label="2.Lig" name="second-league">
          <h3 class="font-semibold text-gray-700 my-2 standing-title">
            <i class="far fa-futbol mr-2"></i>2. Lig Puan Durumu
          </h3>
          <div
            v-if="loading === true"
            class="loading-table flex flex-col justify-between"
          >
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
          </div>
          <at-table
            v-if="loading === false"
            class="mb-4"
            stripe
            size="small"
            border
            :columns="columns"
            :data="data"
          ></at-table>
        </at-tab-pane>
        <at-tab-pane label="3.Lig" name="third-league">
          <h3 class="font-semibold text-gray-700 my-2 standing-title">
            <i class="far fa-futbol mr-2"></i>3. Lig Puan Durumu
          </h3>
          <div
            v-if="loading === true"
            class="loading-table flex flex-col justify-between"
          >
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
            <div class="loading-top-item"></div>
          </div>
          <at-table
            v-if="loading === false"
            class="mb-4"
            stripe
            size="small"
            border
            :columns="columns"
            :data="data"
          ></at-table>
        </at-tab-pane>
      </at-tabs>
    </div>
  </div>
</template>

<script>
import TopScores from "./TopScores";
import TopAssists from "./TopAssists";
import TopCards from "./TopCards";
import axios from "axios";

export default {
  data() {
    return {
      columns: [
        {
          title: "Sıra",
          key: "sira",
        },
        {
          title: "Takım",
          key: "takim",
        },
        {
          title: "O",
          key: "oynanan",
        },
        {
          title: "G",
          key: "galibiyet",
        },
        {
          title: "B",
          key: "beraberlik",
        },
        {
          title: "M",
          key: "maglubiyet",
        },
        {
          title: "A",
          key: "atilan_gol",
        },
        {
          title: "Y",
          key: "yenilen_gol",
        },
        {
          title: "Av",
          key: "averaj",
        },
        {
          title: "Puan",
          key: "puan",
        },
        {
          title: "Durum",
          key: "durum",
        },
      ],
      data: [],
      loading: false,
      league : 'deneme'
    };
  },
  components: {
    TopScores,
    TopAssists,
    TopCards,
  },
  methods: {
    fetchStand(data) {
      this.loading = true;
      this.league = data.name
      if (data.name === "super-league") {
        axios
          .get("/super-lig-puan-durumu")
          .then((response) => {
            this.loading = false;
            this.data = response.data;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
      if (data.name === "first-league") {
        axios
          .get("/birinci-lig-puan-durumu")
          .then((response) => {
            this.loading = false;
            this.data = response.data;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
      if (data.name === "second-league") {
        axios
          .get("/ikinci-lig-puan-durumu")
          .then((response) => {
            this.loading = false;
            this.data = response.data;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
      if (data.name === "third-league") {
        axios
          .get("/ucuncu-lig-puan-durumu")
          .then((response) => {
            this.loading = false;
            this.data = response.data;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.loading-table {
  height: 700px;
}
.loading-top-item {
  height: 36px;
  border-radius: 6px;
  background-color: #f0f0f0;
  position: relative;
}
.loading-top-item::before {
  position: absolute;
  height: 100%;
  width: 200px;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.03);
  content: "";
  border-radius: 6px;
  animation: moveIt 0.6s linear infinite;
}
.loading-top-item-other {
  background-color: #f0f0f0;
  border-radius: 6px;
  height: 65px;
  position: relative;
  overflow: hidden;
}
.loading-top-item-other::before {
  position: absolute;
  height: 100%;
  width: 200px;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.06);
  content: "";
  border-radius: 6px;
  animation: moveIt 1s linear infinite;
}
.loading-top-scores {
  height: 190px;
  overflow: hidden;
}
.standing-title {
  font-size: 12px;
}

@keyframes moveIt {
  0% {
    left: -100%;
  }
  100% {
    left: 110%;
  }
}
</style>