<script setup></script>

<template>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <svg-icon icon="article" />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
$headerHeight: 59px;
$asideWidth: 220px;
$mainContainer: calc(100vh - $headerHeight);
.el-container {
  height: 100%;
  .el-header {
    height: $headerHeight;
    background-color: black;
  }
  .el-aside {
    width: $asideWidth;
  }
  .el-main {
    height: $mainContainer;
    background-color: rgb(237, 240, 244);
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
