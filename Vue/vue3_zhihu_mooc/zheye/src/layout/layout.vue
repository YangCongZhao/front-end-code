<template>
  <div class="container">
    <GlobalHeader :user="userData" />
    <ColumnList :list="tableData" />
  </div>
</template>

<script lang="ts" setup>
import ColumnList from '@/components/ColumnList/ColumnList.vue';
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader.vue";
interface ColumnProps {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
const tableData: ColumnProps[] = [
  {
    id: 1,
    title: '333',
    description: '1212',
    avatar: 'https://tva1.sinaimg.cn/large/008vxvgGly1h8jork4sgoj304w052a9u.jpg'
  },
  {
    id: 1,
    title: '333',
    description: '1212',
    avatar: 'https://tva1.sinaimg.cn/large/008vxvgGly1h8jork4sgoj304w052a9u.jpg'
  },
  {
    id: 1,
    title: '333',
    description: '1212',
    avatar: 'https://tva1.sinaimg.cn/large/008vxvgGly1h8jork4sgoj304w052a9u.jpg'
  }
];
const userData = {
  isLogin:true,
  id:1,
  name:'yc'
}
</script>

<style lang="scss" scoped></style>
