<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand hancock_icon_white" href="#"></a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a class="API-DOC" href="#">Docs</a>
          </li>
          <li>
            <a class="SUPPORT" href="mailto:cryptvault.support.group@bbva.com" target="_top">Support</a>
          </li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0px;
}

.navbar-nav {
  float: right;
}

.nav li a:hover {
  background-color: transparent;
}

.nav>li>a:focus {
  text-decoration: none;
  background-color: transparent;
  color: #f4cf93;
}

.hancock_icon_white {
  opacity: 1 !important;
  object-fit: contain;
  background-image: url("../theme/img/hancock_home.svg");
  margin-top: 5px;
  margin-bottom: 5px;
  width: 224px;
  height: 42px;
}

.SUPPORT {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.API-DOC {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

a {
  text-shadow: none !important;
}
</style>