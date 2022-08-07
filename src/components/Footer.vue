<template>
  <footer class="page-footer font-small teal py-2">
    <div class="footer-copyright text-center">
      &copy; Copyright {{currentYear}} RoflMyPancakes.com
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  }
};
</script>


<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #F7EED2;
}
</style>
