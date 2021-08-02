<template>
  <div class="baseWrap">
      <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.baseWrap {
  display: flex;
  flex-wrap: wrap;
  &_detail {
    padding: 44px 30px 49px;
  }
  &_posts {
    margin: 182px 10px;
  }
}
</style>