<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader/TheHeader";
import TheFooter from "@/components/Navigation/TheFooter/TheFooter";
export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
</style>
