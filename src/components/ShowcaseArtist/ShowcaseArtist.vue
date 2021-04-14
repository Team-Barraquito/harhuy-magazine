<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div @click="goToArtist" class="w-11/12 h-11/12 flex flex-col justify-center items-center">
      <img class="w-11/12 h-auto" :src=getSource :alt=artistData.name>
      <div class="text-left w-full pl-4">
        <p class="font-semibold tracking-wide">{{artistData.name}}</p>
        <p class="text-gray-600">{{artistData.socialMedia}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseArtist",
  props: {
    artistData: {
      name: String,
      photos: Object,
      socialMedia: String,
      urlName: String,
    },
    path: String,
  },

  methods: {
    goToArtist () {
      this.$router.push({ path: `${this.$props.path}/${this.artistData.urlName}` });
    },
  },
  computed: {
    getSource () {
      const frontPath = this.$props.artistData.photos.front;
      return require("../../assets/images/artists/" + this.$props.path + frontPath);
    },
  },
};
</script>

<style scoped>
img:hover{
  opacity: 0.4;
}
</style>
