<template>
  <Loading :active="isLoading"></Loading>
  <div class="container article">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <h3 class="text-center mb-4">{{ article.title }}</h3>
        <p class="text-center mb-4">
          {{ $filters.date(article.create_at) }}‧
          {{ article.author }}
        </p>
        <img :src="article.image" alt="文章圖片"
          class="w-100 object-fit-cover mb-4"
          style="max-height: 400px">
        <p class="mb-5 content" style="white-space: pre-line;">
          {{ article.content }}
        </p>
        <router-link to="/articlesList">回到列表</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import fullpathMixin from '@/mixins/fullpathMixin';

export default {
  mixins: [fullpathMixin],
  data() {
    return {
      isLoading: false,
      article: {},
    };
  },
  methods: {
    getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.article = res.data.article;
        });
    },
  },
  created() {
    this.getArticle();
  },
};
</script>
