<template>
  <div>
    <div>姓：<input type="text" v-model="per.surname" /></div>
    <div>名：<input type="text" v-model="per.name" /></div>
    <div>姓名：<input type="text" v-model="per.fullName" /></div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  setup() {
    let per = reactive({
      surname: "勇敢",
      name: "小陈",
    });
    per.fullName = computed({
      get() {
        return per.surname + "~" + per.name;
      },
      set(value) {
        var arr = value.split("~");
        per.surname = arr[0];
        per.name = arr[1];
      },
    });
    return {
      per,
    };
  },
};
</script>

<style></style>
