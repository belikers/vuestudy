<template>
  <div>
    <p v-show="kaigaun">hello</p>
  </div>
</template>

<script>
export default {
  name: "vShow",
  data() {
    return {
      kaigaun: true,
    };
  },
};
</script>

<style scoped></style>
