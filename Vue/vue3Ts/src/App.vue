<script setup lang="ts">
interface person {
  readonly id: number;
  name: string;
}
let yc: person = {
  id: 3,
  name: "yc",
};
yc.id = 3;
</script>

<template></template>

<style scoped></style>
