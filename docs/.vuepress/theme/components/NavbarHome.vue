<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand hancock_icon_white" href="#"></a>
      <div>
        <ul class="navbar-nav">
          <a class="nav-item nav-link active" href="./">Home</a>
          <a class="nav-item nav-link" href="./guide/">Docs</a>
          <a class="nav-item nav-link" href="mailto:cryptvault.support.group@bbva.com" target="_top">Support</a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../styles/common";
@import "node_modules/bootstrap/scss/nav";
@import "node_modules/bootstrap/scss/navbar";

.navbar {
  background: rgba(255, 255, 255, 0.3);
  border: none !important;
  height: auto !important;
}

.navbar-nav {
  flex-direction: row !important;

  .nav-item {
    font-size: 18px;
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
    color: #ffffff;
    font-weight: bold;
  }
}
.nav-item:hover {
  background-color: transparent;
}

.nav-item:focus,
.nav-item.active {
  text-decoration: none;
  background-color: transparent;
  color: #f4cf93;
}

.hancock_icon_white {
  opacity: 1 !important;
  object-fit: contain;
  background-image: url("../img/hancock_home.svg");
  margin-top: 5px;
  margin-bottom: 5px;
  width: 224px;
  height: 42px;
}

a {
  text-shadow: none !important;
}
</style>