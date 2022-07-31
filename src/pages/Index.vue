<template>
  <Layout>
    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="blog-post"
    >
    <div class="media my-5">
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

    <h2 class="mb-4">RoflMyPancakes</h2>
    <!--
    <img class="greet-image" src="../../uploads/profile_image_twitch-1.png" />
    -->
    <p>
      This is the beginnings of my website to go along with my Twitch Stream.
    </p>
  </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date", order: DESC, limit: 1) {
    edges {
      node {
        id
        path
        title
        excerpt
        image
        date
        timeToRead
        author
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'RoflMyPancakes'
  }
}
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
  width: 125px;
}

#latest-heading {
  color: primary;
}

#latest-title {
  color: black;
}
</style>

<style lang="scss" scoped>
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