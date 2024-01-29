<script>

</script>

<template>
  <header>
    <router-link to="/">
      Доходы
    </router-link>
    <router-link to="/godNoILostMyMoney">
      Расходы
    </router-link>
    <div class="logo">
      <img src="https://freepngimg.com/convert-png/62932-computer-icons-scalable-vector-graphics-coin-euro"
        alt="coinLogo">
    </div>
    <router-link to="/statistics">
      Список расходов
    </router-link>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
