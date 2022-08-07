<template>
    <div>
      <g-link
        :to="item.node.path"
        v-for="item in posts"
        :key="item.node.id"
        class="blog-post"
      >
      <div class="media my-1">
        <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
        <div class="media-body">
          <h4 id="latest-heading" class="mt-0">Latest Post:</h4>
          <h5 id="latest-title" class="mt-0">{{item.node.title}}</h5>
          <p class="my-0">{{item.node.excerpt}}</p>
          <div class="meta">
            <div class="box date">
              <span>{{item.node.date | formatDate}}</span>
            </div>
            <div class="box time">
              <span>{{item.node.timeToRead}} min read</span>
            </div>
          </div>
        </div>
      </div>
      </g-link>   
    </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<style lang="scss" scoped>
// .blog-post{
//   &:hover {
//     text-decoration: none;
//   }
// }

.media {
  img {
    width: auto;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>