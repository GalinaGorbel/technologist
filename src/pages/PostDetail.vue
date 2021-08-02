<template>
  <base-wrap class="baseWrap_detail">
    <article class="card card_detail">
      <div class="card__img">
        <img src="../../public/assets/img/big.jpg" :alt="title" />
      </div>
      <div class="card__content">
        <span class="card__date">{{ date }}</span>
        <h3 class="card__title">{{ title }}</h3>
        <p>
          ЕКАТЕРИНБУРГ, 28 июля. /ТАСС/. Здания двух комплексов общежитий для
          Всемирных студенческих игр 2023 года в Екатеринбурге уже построены. На
          объектах сейчас ведутся фасадные и внутренние работы, говорится в
          сообщении, распространенном в среду пресс-центром группы "Синара".
        </p>
        <p>
          "На площадке Деревни Универсиады уже построены здания двух комплексов
          общежитий для спортсменов. Сейчас на них ведутся фасадные работы,
          устанавливаются системы отопления, вентиляции и электричества. На
          период Универсиады в пяти общежитиях будут жить 11 тыс. спортсменов, а
          после передачи Уральскому федеральному университету - 8,5 тыс.
          студентов", - говорится в сообщении.
        </p>
        <p>
          В тексте указано, что строители монтируют элементы каркаса одного
          здания и ведут фундаментные работы на двух комплексах.
        </p>
        <p>
          "В секторе спортивного манежа общественного центра Универсиады
          завершен монтаж каркаса здания, началось возведение монолитных
          конструкций. В режиме наследия в общественном центре появятся
          электронная библиотека, учебные и компьютерные классы, зал для
          конференций. На территории будущего тренировочного поля с
          легкоатлетическими дорожками завершена укладка геотекстильного полотна
          для выравнивания поверхности", - отмечается в тексте.
        </p>
        <div class="card__like">
          <card-heart :id="id" :liked="isLiked"></card-heart>
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