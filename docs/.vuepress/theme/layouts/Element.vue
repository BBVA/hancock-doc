<template>
    <div class="element">
        <img class="image" :src="image">
        <div class="title">{{title}}</div>
        <div class="description">{{description}}</div>
    </div>
</template>
<style>
.element {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  min-height: 203px;
}
.title {
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #005792;
  font-family: 'Open Sans';
}

.description{
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #999999;
  font-family: 'Open Sans';
}

.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
export default {
  props: ['image', 'title', 'description']
};
</script>