<template>
  <div class="home">
    <div class="home__body">
      <ListBar v-if="this.$store.state.main.activeListBar"></ListBar>
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
          <button @click="()=>{this.$store.commit('main/changeActiveComment')}"><div :class=" this.$store.state.main.activeComment ? 'comments__title' : 'comments__title_active'">Комментарии</div></button>
          <div class="comments__content">
            <Comment
              userName="Rafu"
              text="Последняя демка на технологиях анрила все же была вполне себе играбельной на актуальных"
            ></Comment>
          </div>
        </div>
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
.home {
  background: #f2f2f2;
  min-height: 800px;
  padding-top: 20px;
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