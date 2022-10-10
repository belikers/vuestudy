<template>
  <div>
    <p>电脑价格：{{ addPriceIcon2(addPriceIcon(price)) }}</p>
  </div>
</template>

<script>
export default {
  name: "filtersTest",
  data() {
    return {
      price: 200,
    };
  },
  setup() {
    function addPriceIcon(value) {
      return "￥" + value;
    }
    function addPriceIcon2(value) {
      return "人民币" + value;
    }
    return {
      addPriceIcon,
      addPriceIcon2,
    };
  },
};
</script>

<style scoped></style>
