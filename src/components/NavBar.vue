<!--顶部插槽-->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: rgb(26, 228, 235);
  /* background-color: #39a9ed; */
  color: aliceblue;
}
.left {
  width: 60px;
}

.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>