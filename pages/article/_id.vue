<template>
  <div style="width: 100%">
    <ArticleExtand
      :title="getArticle.title"
      :userName="getArticle.userName"
      :subtitle="getArticle.subtitle"
      :count="getArticle.count"
    ></ArticleExtand>

    <div class="comments-extend">
      <div class="comments-extend__container">
        <div  class="comments-extend__title">Комментарии</div>
        <v-textarea
             
            solo
            name="input-7-4"
            label="Комментарий"
          ></v-textarea>
      </div>
      
      <div
        class="comments-extend__content"
        v-for="comment in this.$store.state.comments.comments"
        :key="comment.id"
      >
        <CommentExtend
          :userName="comment.userName"
          :text="comment.text"
        ></CommentExtend>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleExtand from "../../components/Home/ArticleExtand.vue";
import CommentExtend from "../../components/Home/CommentExtend.vue";
export default {
  components: {
    ArticleExtand,
    CommentExtend,
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


<style lang="scss">
.comments-extend {
  padding: 30px 0;
  background: rgb(253, 252, 252);
  border-radius: 10px;
  margin-top: 10px;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__container {
    display: block;
    width: 520px;
    margin: 0 auto;
  }
  &__title {
    
    text-align: left;
    padding: 15px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 23px;
    color: rgb(23, 23, 23);
  }
}
</style>