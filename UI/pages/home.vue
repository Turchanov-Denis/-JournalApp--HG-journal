<template>
  <div class="article-content">
    <template v-if="this.$store.state.main.autorisation"
      ><div
        class="articles"
        v-for="article in filteredArticle"
        :key="article.id"
      >
        <Nuxt-link :to="'/article/' + article.id"
          ><Article
            :title="article.title"
            :userName="article.userName"
            :subtitle="article.subtitle"
            :count="article.count"
          ></Article
        ></Nuxt-link></div
    ></template>
    <NuxtChild></NuxtChild>
  </div>
</template>

<script>
import ListBar from "../components/Home/ListBar.vue";
import Article from "../components/Home/Article.vue";

export default {
  name: "IndexPage",
  layout: "default",
  components: {
    ListBar,
    Article,
  },
  computed: {
    filteredArticle() {
      return this.$store.state.articles.articles.filter(item => (item.title.toUpperCase()).includes(this.$store.state.main.inputValue.toUpperCase()))
    }
  }
};
</script>

<style lang="scss">
.article-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
  align-items: center;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.articles {
  padding: 30px;
  flex-grow: 1;
}
.content {
  width: 100%;
  display: flex;
}
</style>