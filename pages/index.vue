<template>
  <div class="home">
    <div class="home__body">
      <ListBar></ListBar>
      <div class="content">
        <div class="articles">
          <Article
            userName="Rafu"
            title="Операция «Мегалонгрид»: итоги краудфандинга и важное голосование"
            subtitle="Выбираем порядок выхода анонсированных текстов и два мегалонгрида."
            count="0"
          ></Article>
        </div>
        <div class="comments">
          <div class="comments__title">Комментарии</div>
        </div>
      </div>
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
.home {
  background: #f2f2f2;
  height: 100vh;
  &__body {
    display: flex;
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
.comments{
  flex-grow: 0;
  padding: 30px;
  &__title {
    writing-mode: vertical-rl;
  /*text-orientation: sideways;*/
  transform:scale(-1);
  }
}
</style>