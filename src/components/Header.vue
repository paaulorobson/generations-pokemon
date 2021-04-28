<template>
  <header>
    <div class="container">
      <img src="../assets/logo.svg" width="112" height="41" @click="goHome" />
      <input type="text" placeholder="Digite sua busca" />
      <div class="profile">
        <img src="../assets/profile.svg" />
        <p>Paulo Robson</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goHome() {
      return this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 94px;
  background-color: #373737;
  padding: 1rem;

  .container {
    max-width: 1240px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      cursor: pointer;
      @media screen and (max-width: 600px) {
        margin-bottom: 10px;
      }
    }

    input[type="text"] {
      width: 100%;
      max-width: 785px;
      height: 54px;
      border: none;
      border-radius: 8px;
      background-color: #ebebeb;
      background-image: url("../assets/search.svg");
      background-repeat: no-repeat;
      background-position: 95%;
      outline: none;
      font-weight: 400;
      font-size: 16px;
      color: #333;
      padding-left: 20px;
    }
    ::placeholder {
      color: #adadad;
      font-size: 16px;
    }
    .profile {
      display: flex;
      align-items: center;

      p {
        margin-left: 1rem;
        color: #ffffff;
        cursor: pointer;
      }

      @media screen and (max-width: 600px) {
        margin-top: 10px;
      }
    }

    @media screen and (max-width: 600px) {
      display: flex;
      margin: 0 20px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 600px) {
    height: 200px;
  }
}
</style>
