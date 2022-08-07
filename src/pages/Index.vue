<template>
  <Layout>
    <Preview :posts="$page.posts.edges"></Preview>

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
