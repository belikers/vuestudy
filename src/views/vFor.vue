<template>
  <ul>
    <li v-for="(item, index) of fruit" :key="index">
      索引值 index:{{ index }}---item:{{ item }} 每一项name:{{
        item.name
      }}
      每一项color:{{ item.color }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "vFor",
  data() {
    return {
      fruit: [
        { name: "苹果", color: "红色" },
        { name: "梨子", color: "黄色" },
        { name: "香蕉", color: "橘色" },
        { name: "橘子", color: "绿色" },
      ],
    };
  },
};
</script>

<style scoped></style>
