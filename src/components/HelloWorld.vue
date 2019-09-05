<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>categories: {{categories}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Category } from "../models/category";
import { Article } from "@/models/articles";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public categories = null;

  async mounted() {
    const categories = [
      { _id: "11111", name: "cat1" },
      { _id: "22222", name: "cat1" }
    ];

    const articles = [{ _id: "AAAA", name: "article1", category: "11111" }];

    await Category.insertOrUpdate({ data: categories });
    await Article.insertOrUpdate({ data: articles });

    this.categories = Category.query().all();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
