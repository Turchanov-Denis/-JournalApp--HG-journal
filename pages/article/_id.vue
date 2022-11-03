<template>
  <ArticleExtand
    :title="getArticle.title"
    :userName="getArticle.userName"
    :subtitle="getArticle.subtitle"
    :count="getArticle.count"
  ></ArticleExtand>
</template>

<script>
import ArticleExtand from "../../components/Home/ArticleExtand.vue";

export default {
  components: {
    ArticleExtand,
  },
  computed: {
    getArticle() {
      return this.$store.state.articles.articles.filter(
        (item) => item.id == this.$route.params.id
      )[0];
    },
  },
};
</script>