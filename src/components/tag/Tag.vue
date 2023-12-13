<template>
  <img :src="require(`../../assets/${link}`)">
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>

<style scoped>
img {
  padding: 5vw;
  object-fit: contain; 
  width: 100%;
  height: 100%;
}
</style>
