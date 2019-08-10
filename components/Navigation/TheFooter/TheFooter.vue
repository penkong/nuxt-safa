<template>
  <div class="footer">
    <ul>
      <li>
        <a href="#">Contact Us</a>
      </li>
      <li>
        <a href="#">Address</a>
      </li>
      <li>
        <a href="#">Link</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  height: 3.5rem;
  width: 100vw;
  z-index: 2;
  clear: both;
  background-image: linear-gradient(
    to right,
    #026ea0,
    #016593,
    #005d87,
    #00547b,
    #004c6f,
    #004c6f,
    #004c6f,
    #004c6f,
    #00547b,
    #005d87,
    #016593,
    #026ea0
  );
  // background-image: linear-gradient(to right, #004444, #014848, #024c4c, #035151, #055555, #055555, #055555, #055555, #035151, #024c4c, #014848, #004444);
  color: white;
  border: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0.3rem;
    // margin-top: .55rem;

    li {
      margin: 0 1rem;
      font-size: 1.3rem;
      font-weight: 100 !important;
      padding: 0.5rem 0.8rem;
      transition: all 0.2s ease-in;
      &:hover {
        color: #042523;
        background: white;
      }
    }
  }
}
</style>