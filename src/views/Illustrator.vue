<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Illustrator",
  data () {
    return {
      illustrator: {},
    };
  },
  computed: {
    ...mapGetters(["illustrators"]),
  },
  methods: {
    getDesigner () {
      this.illustrator = this.illustrators(this.$route.params.name);
    },
  },
  beforeMount () {
    this.getDesigner();
  },
};
</script>

<style scoped>

</style>
