<template>
  <base-wrap class="baseWrap_detail">
    <article class="card card_detail">
      <div class="card__img">
        <img src="../../public/assets/img/big.jpg" :alt="title" />
        <!-- в целях экономии времени вставила прямую ссылку -->
      </div>
      <div class="card__content">
        <span class="card__date">{{ date }}</span>
        <h3 class="card__title">{{ title }}</h3>
        <p>{{ detail }}</p>
        <div class="card__like">
          <card-heart :id="id" :liked="isLiked" :idx="index"></card-heart>
          <span>{{ like }}</span>
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
  data() {
    return {
      selectedPost: null,
      isLiked: null,
      index: null,
    };
  },
  computed: {
    title() {
      return this.selectedPost.name;
    },
    date() {
      return this.selectedPost.date;
    },
    like() {
      return this.selectedPost.like;
    },
    detail() {
      return this.selectedPost.detail_text;
    },
  },
  created() {
    this.selectedPost = this.$store.getters['request/requests'].find(
      (item) => item.id == this.id
    );
    this.isLiked = this.selectedPost.isLiked;
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