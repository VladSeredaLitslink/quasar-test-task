<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Secure SSL Encryption & Guaranteed Safe Checkout",
  },
});

const getImgUrl = (val) => {
  return new URL("../assets/" + val + ".png", import.meta.url).href;
};
</script>
<template>
  <q-card class="b-radius16">
    <q-card-section class="flex items-center column">
      <div class="q-mb-lg flex items-center no-wrap">
        <q-icon class="q-mr-sm" size="sm" name="lock" />
        <span>{{ title }}</span>
      </div>
      <div>
        <q-img
          width="40px"
          height="24px"
          class="q-mr-sm"
          v-for="i in 5"
          :key="i"
          :src="getImgUrl(`secure/${i}`)"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
