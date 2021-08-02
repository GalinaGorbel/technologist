<template>
  <div class="tag">
    <span>
      <slot>#компания</slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  background: rgba(141, 190, 80, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  height: 33px;
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  &_detail {
    margin: 0 8px 64px 0;
    color: #666565;
  }
  &_item {
    position: absolute;
    color: #ffffff;
    font-size: 14px;
    left: 2%;
    top: 75%;
  }
}
@media screen and (min-width: 425px) {
  .tag_item {
    top: 77%;
  }
}

@media screen and (min-width: 1024px) {
  .tag_item {
      top: 82%;
  }
}
@media screen and (min-width: 1440px) {
  .tag_item {
    top: 75%;
  }
}
</style>