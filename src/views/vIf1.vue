<template>
  <div>
    <p v-if="type == 0">现在看到我了</p>
    <p v-else-if="type == 1">现在他看到我了</p>
    <p v-else>你看不到我了</p>
  </div>
</template>

<script>
export default {
  name: "vIf1",
  data() {
    return {
      type: 1,
    };
  },
};
</script>

<style scoped></style>
