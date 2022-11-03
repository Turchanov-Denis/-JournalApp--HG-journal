<template>
  <div class="content">
    <div
      class="articles"
      v-for="article in this.$store.state.articles.articles"
      :key="article.id"
    >
      <Nuxt-link :to="'/article/' +  article.id"
        ><Article
          
          :title="article.title"
          :userName="article.userName"
          :subtitle="article.subtitle"
          :count="article.count"
        ></Article
      ></Nuxt-link>
    </div>
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

</style>