<template>
  <article class="card card_item">
    <div class="card__img">
      <img :src="src" :alt="title" />
      <base-tag class="tag_item"></base-tag>
    </div>
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__text">
        {{ descr }}
        <router-link :to="postLink">...подробнее</router-link>
      </p>
    </div>
    <div class="card__bottom">
      <span class="card__date">{{ date }}</span>
      <div class="card__like">
        <card-heart :id="id" :liked="isLiked"></card-heart>
        <span>{{ like }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['title', 'descr', 'date', 'like', 'id', 'isLiked', 'img'],
 data() {
    return {
      src: `/assets/img/${this.img}`
    }
  }, 
  computed: {
    postLink() {
      return `${this.$route.path}/${this.id}`;
    }
  },

};
</script>

<style lang="scss">
.card {
  background: #ffffff;
  &_item {
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
  }
  &__img {
    position: relative;
    img {
      border-radius: 2px;
      width: 100%;
    }
  }
  &__content {
    margin: 21px 8px 28px;
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
  &__title {
    color: #000000;
    font-weight: 500;
    font-size: 18px;
  }
  &__text {
    font-size: 15px;
    line-height: 22px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 25px 8px 6px;
  }
  &__like {
    display: flex;
    align-items: baseline;
    span {
      font-size: 12px;
    }
  }
  &__date {
    font-weight: 400;
    font-size: 13px;
    font-style: italic;
  }
}
@media screen and (min-width: 767px) {
  .card {
    &__content {
      p {
        font-size: 15px;
      }
    }
    &_item {
      flex: 32%;
    }
  }
}
@media screen and (min-width: 1025px) {
  .card {
    &_item {
      flex: 20%;
    }
  }
}
</style>