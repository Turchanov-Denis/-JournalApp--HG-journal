<template>
  <div class="content">
    <div
      class="articles"
      v-for="article in this.$store.state.articles.articles"
      :key="article.id"
    >
      <Article
        :userName="article.userName"
        :title="article.title"
        :subtitle="article.subtitle"
        :count="article.count"
      ></Article>
    </div>
    <div class="comments">
      <button
        @click="
          () => {
            this.$store.commit('main/changeActiveComment');
          }
        "
      >
        <div
          :class="
            this.$store.state.main.activeComment
              ? 'comments__title'
              : 'comments__title_active'
          "
        >
          Комментарии
        </div>
      </button>
      <div
        class="comments__content"
        v-for="comment in this.$store.state.comments.comments"
        :key="comment.id"
      >
        <Comment :userName="comment.userName" :text="comment.text"></Comment>
      </div>
    </div>
  </div>
</template>

<script>
import ListBar from "../components/Home/ListBar.vue";
import Article from "../components/Home/Article.vue";
import Comment from "../components/Home/Comment.vue";

export default {
  name: "IndexPage",
  layout: "default",
  components: {
    ListBar,
    Article,
    Comment,
  },
};
</script>

<style lang="scss">

.articles {
  padding: 30px;
  flex-grow: 1;
}
.content {
  width: 100%;
  display: flex;
}
.comments {
  flex-grow: 0;
  padding: 30px;
  &__title {
    // writing-mode: vertical-rl;
    // transform: scale(-1);

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: rgb(23, 23, 23);
    &_active {
      writing-mode: vertical-rl;
      transform: scale(-1);
    }
  }
}
</style>