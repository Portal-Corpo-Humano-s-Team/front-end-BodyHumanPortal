<script setup>
import HeaderView from '@/components/desktop/elements/HeaderView.vue'
import HeaderMobileView from '@/components/mobile/elements/HeaderMobileView.vue';
import FooterView from '@/components/desktop/elements/FooterView.vue'
import FooterMobileView from '@/components/mobile/elements/FooterMobileView.vue';
</script>

<template>
  <HeaderView />
  <HeaderMobileView />
  <RouterView />
  <FooterView />
  <FooterMobileView />
</template>
