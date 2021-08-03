<template>
  <div @click="addLike" class="heart">
    <div class="heart__item" :class="isLiked ? 'heart__item_active' : ''"></div>
  </div>
</template>

<script>
export default {
  props: ['id', 'liked'],
  data() {
    return {
      isLiked: this.liked,
    };
  },
  methods: {
    addLike() {
      this.isLiked ? (this.isLiked = false) : (this.isLiked = true);
      this.$store.commit('request/addLike', {
        id: +this.id,
        liked: this.isLiked,
      });
      this.$store.dispatch('request/saveChanges', { id: +this.id });
    },
  },
};
</script>

<style lang="scss">
.heart {
  cursor: pointer;
  &__item {
    width: 10px;
    height: 10px;
    background-color: #e5e5e5;
    transform: rotate(45deg);
    position: relative;
    display: inline-block;
    margin-right: 11px;
    &::before,
    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background-color: #e5e5e5;
      border-radius: 50%;
      position: absolute;
    }
    &::before {
      top: -5px;
      left: 0;
    }
    &::after {
      top: 0;
      left: -5px;
    }
    &_active {
      background-color: #eb5757;
      &::before,
      &::after {
        background-color: #eb5757;
      }
    }
  }
}
</style>