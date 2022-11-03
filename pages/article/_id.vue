<template>
    <ArticleExtand
      :title="this.$store.state.articles.articles[this.$route.params.id].title"
      :userName="this.$store.state.articles.articles[this.$route.params.id].userName"
      :subtitle="this.$store.state.articles.articles[this.$route.params.id].subtitle"
      :count="this.$store.state.articles.articles[this.$route.params.id].count"></ArticleExtand>
</template>

<script>
import ArticleExtand from "../../components/Home/ArticleExtand.vue";

export default {
  components: {
    ArticleExtand,
  },
};
</script>