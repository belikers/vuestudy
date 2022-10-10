<template>
  <div>
    <input v-on:keyup="counter += 1" />
    <p>手指离开时按出{{ counter }}个字符</p>
    <input v-on:keydown="counter2 += 1" />
    <p>手指按下时按出{{ counter2 }}个字符</p>
  </div>
</template>

<script>
export default {
  name: "vonTest",
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
};
</script>

<style scoped></style>
