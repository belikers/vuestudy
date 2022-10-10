<template>
  <div>
    <p v-if="seen">现在看到我了</p>
  </div>
</template>

<script>
export default {
  name: "vIf1",
  data() {
    return {
      seen: true,
    };
  },
};
</script>

<style scoped></style>
