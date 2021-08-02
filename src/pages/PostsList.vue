<template>
  <base-wrap class="baseWrap_posts">
    <card-item
      v-for="post in posts"
      :title="post.name"
      :key="post.id"
      :descr="post.description"
      :date="post.date"
      :like="post.like"
      :id="post.id"
      :isLiked="post.isLiked"
      :img="post.image"
    >
    </card-item>
  </base-wrap>
</template>


<script>
export default {
  computed: {
    posts() {
      return this.$store.getters['request/requests'];
    }
  }
};
</script>

