<template>
    <div class="feature">
        <img class="image" :src="image">
        <div class="title">{{title}}</div>
        <div class="description">{{description}}</div>
    </div>
</template>
<style>
.feature {
  width: 241px;
  height: 201px;
  margin-left: auto;
  margin-right: auto;
}
.title {
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #00b9f7;
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