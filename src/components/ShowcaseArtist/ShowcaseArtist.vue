<template>
  <div @click="goToArtist" class="container flex flex-col justify-center items-center">
    <img class="w-4/5 h-auto" :src=getSource :alt=artistData.name>
    <p class="">
      {{artistData.name}}
      {{artistData.socialMedia}}
    </p>
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
    },
  },

  methods: {
    goToArtist () {
      this.$router.push({ path: "/artist" });
    },
  },
  computed: {
    getSource () {
      const frontPath = this.$props.artistData.photos.front;
      return require("../../assets/images/artists/illustrators" + frontPath);
    },
  },
};
</script>

<style scoped>

</style>
