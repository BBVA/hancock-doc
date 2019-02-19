<template>
    <div>
        <section class="section first-section">
            <div class="content container">
                <img src="../img/hancock-icon-blue.svg" class="hancock-icon-blue">
                <h1 class="We-provide-simplicit">WE PROVIDE <b>SIMPLICITY, ADAPTABILITY</b> AND <b>EFFICIENTLY</b> TO DEVELOP IN ANY DLT</h1>
            </div>
        </section>
         <section class="section second-section">
            <div class="content container second-text">
                – NOT REQUIRE DEEP KNOWLEDGE OF DECENTRALISED SYSTEM -
            </div>
        </section>
        <section class="section third-section">
            <div class="content container third-text">
                <div class="mini-title mini-blue">
                    WELCOME TO NEW TECHNOLOGY
                </div>    
                <hr>
            </div>
            <div class="container margin-bottom-40">
                <div class="row">
                    <div class="col-sm-4">
                        <Feature :image="reusability" title="Increase reusability" description="Focus on your business and abstract yourself from the DLT."/>
                    </div>
                    <div class="col-sm-4">
                        <Feature :image="simplify" title="SDK->Simplify" description="Facilitate interactions to avoid complexity."/>
                    </div>
                    <div class="col-sm-4">
                        <Feature :image="cost" title="Reducing cost, time and effort" description="Elimination of repetitive and complex tasks."/>
                    </div>
                </div>
            </div>
            <div class="container margin-bottom-40">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="margin-left">
                            <div class="mini-title mini-blue float-left">
                                ROOT
                            </div>  
                            <hr class="float-left no-margin-left">
                            <div class="float-left">
                                Hancock is a research product conceived within BBVA - New Digital Business Research Lab.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="box1">
                            <img src="../img/fotolia.png" class="fotolia">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section forth-section">
            <div class="content container">
                <div class="mini-title mini-white">
                    Why everyone   <img src="../img/outline-icon.svg" class="Outline-Icon">    this?
                </div>    
                <hr class="hr-white">
                <div class="description-Copy margin-bottom-40">
                    We facilitate the <b>development on DLT</b>, simplifying the <b>interaction</b> and <b>abstracting</b> the specific logic of each one of them.
                </div>
                <div class="elements-hancock">
                    <div class="row border-bottom-grey">
                        <div class="col-sm-6 border-right-grey">
                            <Element :image="adapter" title="DLT Adapter" description="Interface to abstract interaction with different DLT networks."/>
                        </div>
                        <div class="col-sm-6">
                            <Element :image="wallet" title="Wallet Hub" description="Enable a wallet service providers that will then route any ready-to-sign transaction."/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 border-right-grey">
                            <Element :image="reusability" title="DLT Broker" description="Provides a websocket connection that propagates any DLT event the user is subscribed."/>
                        </div>
                        <div class="col-sm-6">
                            <Element :image="simplify" title="SDK" description="Provides a simplified consumption, minimizing the risk for errors and improving products quality."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section fifth-section">
            <div class="content container">
                <div class="fifth-section-text">
                    <div class="mini-title mini-blue">
                        ABOUT US
                    </div>  
                    <hr>
                    <div>
                        We are passionate about technology and science that we love to solve challenges to improve prosperity.
                    <div class="border-blue">

                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section sixth-section">
            <div class="content container">
                <div class="rectangle-white">
                    <div class="description-Copy-5">
                        Take the step to grow your business in an easy and fast way
                    </div>
                    <!-- <a href="http://google.com" class="button">API DOCUMENTATION</a> -->
                </div>
            </div>
        </section>
        <section class="section footer">
            <div class="content container">
                <img src="../img/group-22.svg" class="group-22">
            </div>
        </section>
    </div>
</template>
<style lang="css" scoped>

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
}

.box1 {
    display: inline-block;
    position: relative;
}
.box1::before {
    content: '';
    display: block;
    width: 50%;
    height: 70%;
    position: absolute;
    left: -15px;
    top: -15px;
    border: 6px solid #00b9f7;
    z-index: -1;
}

.elements-hancock {
    box-shadow: 0 12px 42px 12px rgba(0, 0, 0, 0.08), 0px 7px 11px 1px rgba(0, 0, 0, 0.3);
    width: 55%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50px;
}

.elements-hancock .col-sm-6{
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
  width: 80%;
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

.no-margin-left{
    margin-left: 0px;
}

.float-left {
    text-align: left!important;
}

.first-section{
    background-image: url("../img/bg.svg");
    background-size: contain;
    background-attachment: fixed;
}
.second-section{
    background-color: #00b9f7;
}

.hancock-icon-blue {
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70pt;
    width: 120px;
}

.We-provide-simplicit {
    width: 65%;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    font-weight: 300;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
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
}

.mini-title {
  font-size: 28px;
  margin-top: 50px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.mini-blue {
  color: #005792;
}

.mini-white {
  color: white;
}

.rectangle-white {
  width: 960px;
  height: 110px;
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
    width: 541px;
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
    background-image: url("../img/bitmap.png");
    background-size: contain;
    background-attachment: fixed;
}

.fifth-section {
    background-color: #f4f4f4;
}

.sixth-section {
    background-image: url("../img/bitmap_2.png");
    background-size: cover;
}

.footer {
    background-color: #606971;
}

.group-22 {
  width: 163px;
  height: 31px;
  object-fit: contain;
}

</style>

<script>
import reusability from "../img/reusability.svg";
import cost from "../img/cost.svg";
import simplify from "../img/simplify.svg";
import broker from "../img/broker.svg";
import adapter from "../img/adapter.svg";
import wallet from "../img/hub.svg";
import sdk from "../img/sdk.svg";
import Feature from './Feature';
import Element from './Element';
export default {
    components: {
        Feature,
        Element
    },
    data: function () {
        return {
            reusability: reusability,
            simplify: simplify,
            cost: cost,
            sdk: sdk,
            wallet: wallet,
            adapter: adapter,
            broker: broker
        }
    }
}
</script>