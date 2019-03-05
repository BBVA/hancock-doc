<template>
  <div class="home-page">
    <section class="section first-section">
      <NavbarHome/>
      <div class="container">
        <img src="../img/hancock-icon-blue.svg" class="hancock-icon-blue">
        <h1 class="title">We provide
          <strong>simplicity, adaptability</strong> and
          <strong>efficiency</strong> to develop in any dlt
        </h1>
      </div>
    </section>
    <section class="section second-section">
      <div
        class="container second-text"
      >– HANCOCK DOES NOT REQUIRE A DEEP KNOWLEDGE OF DECENTRALISED SYSTEMS -</div>
    </section>
    <section class="section third-section">
      <div class="container third-text">
        <div class="mini-title mini-blue">WELCOME TO NEW TECHNOLOGY</div>
        <hr>
      </div>
      <div class="container margin-bottom-40">
        <div class="row">
          <div class="col-md-4">
            <Feature
              :image="reusability"
              title="Increase reusability"
              description="Focus on your business and abstract yourself from the DLT."
            />
          </div>
          <div class="col-md-4">
            <Feature
              :image="simplify"
              title="SDK->Simplify"
              description="Facilitate interactions to avoid complexity."
            />
          </div>
          <div class="col-md-4">
            <Feature
              :image="cost"
              title="Reducing cost, time and effort"
              description="Elimination of repetitive and complex tasks."
            />
          </div>
        </div>
      </div>
      <div class="container margin-bottom-40">
        <div class="row">
          <div class="col-md-6">
            <div class="margin-left">
              <div class="mini-title mini-blue float-left small-screen-root">ROOT</div>
              <hr class="float-left no-margin-left">
              <div class="float-left">Hancock is a
                <strong>research product</strong> conceived within BBVA - New Digital Businesses Research Lab.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box1">
              <img src="../img/fotolia.png" class="fotolia">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section forth-section">
      <div class="container">
        <div class="mini-title mini-white">
          WHY EVERYONE
          <img src="../img/outline-icon.svg" class="Outline-Icon"> THIS?
        </div>
        <hr class="hr-white">
        <div class="description-Copy">
          We facilitate the
          <strong>development on several DLTs</strong>, simplifying the
          <strong>interaction</strong> and
          <strong>abstracting</strong> from their specific logic.
        </div>
        <div class="elements-hancock">
          <div class="row border-bottom-grey">
            <div class="col-md-6 border-right-grey">
              <Element
                :image="adapter"
                title="DLT Adapter"
                description="Interface to abstract from interaction with different DLT networks."
              />
            </div>
            <div class="col-md-6">
              <Element
                :image="hub"
                title="Wallet Hub"
                description="Enable a wallet service provider that will then route any ready-to-sign transaction."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 border-right-grey">
              <Element
                :image="reusability"
                title="DLT Broker"
                description="Provides a websocket connection that propagates any DLT event the user is subscribed to."
              />
            </div>
            <div class="col-md-6">
              <Element
                :image="simplify"
                title="SDK"
                description="Provides a simplified consumption, minimizing the risk for errors and improving product quality."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section fifth-section">
      <div class="container">
        <div class="fifth-section-text">
          <div class="mini-title mini-blue">ABOUT US</div>
          <hr>
          <div>We are passionate about
            <strong>technology</strong> and
            <strong>science</strong>. We want to drive the shift our society needs.
            <div class="border-blue"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section sixth-section">
      <div class="container add-padding">
        <div class="rectangle-white">
          <div class="row">
            <div class="col-xl-8 add-padding description-Copy-5">
               Take the step to <strong>grow your business</strong> in an easy and fast way
            </div>
            <div class="col-xl-4">
              <div class="add-padding">
                <a
                  href="./guide/"
                  class="button"
                >API DOCUMENTATION</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section footer">
      <div class="container footer-row">
        <div class="row">
          <div class="col-md-3">
            <img src="../img/group-22.svg" class="group-22">
          </div>
          <div class="col-md-3">
            <a>POLICY COOKIES</a>
          </div>
          <div class="col-md-3">
            <a>TERMS & CONDITIONS</a>
          </div>
          <div class="col-md-3">
            <a>PERSONAL DATA PROTECTION POLICY</a>
          </div>
        </div>
      </div>
      <div class="footer-base">
        <div class="bbva">© Banco Bilbao Vizcaya Argentaria, S.A. 2018</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.footer-base {
  border-top: 1px solid grey;
}

.bbva {
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.83;
  letter-spacing: normal;
  text-align: center;
  color: #999999;
  text-align: center;
  padding: 20px;
}

a {
  text-shadow: none !important;
}

strong, b {
   font-weight: bold;
}

a.button {
  color: white;
  background-color: #ff1654;
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  white-space: nowrap;
  display: block;
  text-decoration: none;
  
}

.box1 {
  display: inline-block;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: block;
    width: 42%;
    height: 85%;
    position: absolute;
    left: 4px;
    top: -15px;
    border: 6px solid #00b9f7;
    z-index: -1;
  }
}

.elements-hancock {
  box-shadow: 0 12px 42px 12px rgba(0, 0, 0, 0.08),
    0px 7px 11px 1px rgba(0, 0, 0, 0.3);
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50px;
}

.add-padding {
  padding: 20px;
}

.elements-hancock > div {
  background-color: white;
}

.elements-hancock .row {
  margin-right: 0px;
  margin-left: 0px;
}

.border-bottom-grey {
  border-bottom: 1px solid lightgrey;
}

.border-right-grey {
  border-right: 1px solid lightgrey;
}

.fifth-section-text {
  text-align: center;
  padding-top: 50px;
}

.fotolia {
  width: 70%;
  margin-left: 20px;
  object-fit: contain;
}

.Outline-Icon {
  width: 37px;
  height: 38px;
  object-fit: contain;
}

.border-blue {
  display: block;
  margin-top: 30px;
  width: 60%;
  height: 200px;
  border: 6px solid #00b9f7;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
}

.footer-row {
  width: 70%;
  padding: 20px;
}

.footer a {
  font-size: 10px;
  color: #f4f4f4;
  vertical-align: bottom;
}

.borders-copy-2 {
  width: 260px;
  height: 283px;
  object-fit: contain;
}

.margin-bottom-40 {
  margin-bottom: 40px;
}

.margin-left {
  margin-left: 50px;
  width: 250px;
}

.no-margin-left {
  margin-left: 0px;
}

.float-left {
  text-align: left !important;
}

.first-section {
  background-image: url("../img/bg.svg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  .container {
     padding: 20px 0;
  }
}
.second-section {
  background-color: #00b9f7;
}

.hancock-icon-blue {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
}

.title {
  padding-top: 20px;
  width: 60%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-family: Quicksand;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
}

.second-text {
  font-size: 18px;
  padding-bottom: 8px;
  padding-top: 8px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  font-family: "Open Sans";
}

.mini-title {
  font-size: 28px;
  margin-top: 50px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-family: Quicksand;
}

.mini-blue {
  color: #005792;
}

.mini-white {
  color: white;
}

.rectangle-white {
  width: 60%;
  border-radius: 8px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.description-Copy {
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.description-Copy-5 {
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #4d4d4e;
  // padding: 20px;
  text-align: center;
}

hr {
  display: block;
  margin-top: 1em;
  margin-bottom: 1.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-top: 2px solid #00b9f7;
  width: 120px;
}

.hr-white {
  border-top: 2px solid white;
}

.forth-section {
  padding-top: 20px;
  background-image: url("../img/bitmap.png");
  background-size: auto;
  background-attachment: fixed;
}

.fifth-section {
  padding-top: 20px;
  background-color: #f4f4f4;
}

.sixth-section {
  background-image: url("../img/bitmap_2.png");
  background-size: cover;
}

.footer {
  background-color: #606971;
  color: #fff;
}

.group-22 {
  width: 163px;
  height: 31px;
  object-fit: contain;
}

@media screen and (max-width: 600px) {
  .title {
    width: 100%;
  }

  .box1 {
    margin-top: 40px;
    margin-left: 40px;
  }

  .small-screen-root {
    text-align: center !important;
    margin-top: -30px;
  }

  .no-margin-left {
    margin-left: auto;
  }

  .elements-hancock {
    width: 80%;
  }

  .element {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
    min-height: 203px;
    padding-bottom: 10px;
  }

  .border-right-grey {
    border: 0px;
  }

  .border-bottom-grey {
    border: 0px;
  }
}
</style>

<script>
import Feature from "../components/Feature";
import Element from "../components/Element";
import NavbarHome from "../components/NavbarHome.vue";

import reusability from "../img/reusability.svg";
import simplify from "../img/simplify.svg";
import cost from "../img/cost.svg";
import adapter from "../img/adapter.svg";
import hub from "../img/hub.svg";

export default {
  components: {
    NavbarHome,
    Feature,
    Element
  },
  data() {
    return {
      reusability,
      simplify,
      cost,
      adapter,
      hub
    };
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "node_modules/bootstrap/scss/reboot";
@import "node_modules/bootstrap/scss/grid";

.home-page {

  .content:not(.custom) > *:first-child {
    margin-top: 0 !important;
    .content:not(.custom) {
      padding: inherit;
    }
  }
}
</style>
