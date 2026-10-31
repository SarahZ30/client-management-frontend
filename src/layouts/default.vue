<template>
  <div class="default_layout">
    <!-- header -->
    <HeaderComponent></HeaderComponent>

    <!-- dynamic route view -->
    <div class="page_content">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>