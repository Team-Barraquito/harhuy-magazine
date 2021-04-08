<template>
  <div class="container">
    <img :src=getSource :alt=artistData.name>
    <p>
      {{artistData.name}}
      @{{artistData.socialMedia}}
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
  computed: {
    getSource () {
      const frontPath = this.$props.artistData.photos.front;
      return require("../../assets/artists/illustrators" + frontPath);
    },
  },
};
</script>

<style scoped>

</style>
