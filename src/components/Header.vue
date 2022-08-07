<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop ml-2" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
        <g-link class="logo-home logo-desktop ml-2" to="/">{{ $static.metadata.siteName }}</g-link>
        <g-link class="logo-home logo–mobile ml-2" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" class="mr-2"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <g-link class="nav--link mr-2" to="/about">About</g-link>
          <g-link class="nav--link mr-2" to="/blog">Blog</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #E9851B;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
  color: #F7EED2;
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  font-size: 1.2rem;
  font-weight: bold;
  color: #F7EED2;
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
