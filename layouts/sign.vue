<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader/TheHeader";

export default {
  name: "default",
  components: {
    TheHeader
  }
};
</script>

<style>
</style>
