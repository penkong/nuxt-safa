<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>
      Back to
      <nuxt-link href="/">safety</nuxt-link>!
    </p>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: rgb(255, 0, 0);
}

.error-page a:hover,
.error-page a:active {
  color: rgb(57, 143, 0);
}
</style>
