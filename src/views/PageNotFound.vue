<template>
  <div class="wrapper">
    <div class="container">
      <div class="page_not_found">
        <p>Страница не найдена</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.page_not_found {
  height: calc(100vh - 86px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.page_not_found p {
  font-size: 30px;
  font-weight: 500;
}
</style>

