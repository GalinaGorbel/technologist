<template>
  <base-wrap class="baseWrap_detail" v-if="post">
    <article class="card card_detail">
      <div class="card__img">
        <img src="../../public/assets/img/big.jpg" alt="picture" />
        <!-- в целях экономии времени вставила прямую ссылку -->
      </div>
      <div class="card__content">
        <span class="card__date">{{ post.date }}</span>
        <h3 class="card__title">{{ post.name }}</h3>
        <p>{{ post.detail_text }}</p>
        <div class="card__like">
          <card-heart :id="id" :liked="post.isLiked"></card-heart>
          <span>{{ post.like }}</span>
        </div>
        <hr />
        <base-tag class="tag_detail"></base-tag>
        <base-tag>#общежитие</base-tag>
      </div>
    </article>
  </base-wrap>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    post() {
      return this.$store.getters['request/requests'].find(
        (item) => item.id == this.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &_detail {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &__content {
    max-width: 80%;
    margin: 20px auto 0;
    span {
      font-size: 0.88rem;
    }
  }
  &__title {
    font-size: 1.3rem;
  }
  &__img {
    height: 250px;
    img {
      border-radius: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__like {
    margin: 25px 0 21px;
  }
  hr {
    background: #99d150;
    opacity: 0.5;
  }
}

@media screen and (min-width: 424px) {
  .card {
    &__title {
      font-size: 1.5rem;
    }
    &__content {
      span {
        font-size: 1rem;
      }
    }
  }
}
@media screen and (min-width: 767px) {
  .card {
    &__title {
      font-size: 2rem;
    }
  }
}
@media screen and (min-width: 1025px) {
  .card {
    &__content {
      max-width: 50%;
    }
    &__title {
      font-size: 2.38rem;
    }
  }
}
</style>