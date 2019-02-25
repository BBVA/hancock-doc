<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@parent-theme/components/SidebarLinks.vue'
import NavLinks from '@parent-theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>

<style lang="stylus">
.sidebar
  background-color #49606d !important
  border none !important
  box-shadow: 4px 0 5px 0 rgba(0, 0, 0, 0.22);

  .nav-links
    display none !important

  .sidebar-links > li > a.sidebar-link,
  .sidebar-heading.clickable
    color: white 
    font-size 14px
    font-weight 600

  .sidebar-link
    &.active, &:hover
      background-color #6c838e

  .sidebar-heading
    &.clickable.active
      background-color #6c838e

</style>
