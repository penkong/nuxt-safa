<template>
  <div>
    <TheHeader />
    <nuxt />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader/TheHeader";
// import TheSideNav from "@/components/Navigation/TheFooter/TheFooter";
export default {
  name: "default",
  components: {
    TheHeader
    // TheFooter
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  /* font-size: 16px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
