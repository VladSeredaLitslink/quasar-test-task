<script setup>
import { ref, computed } from "vue";
import GuaranteedSafe from "components/GuaranteedSafe.vue";

const slide = ref(1);

const PRICE = 50;
const amount = ref(1);

const price = computed(() => {
   return amount.value * PRICE;
})
</script>
<template>
  <q-page class="container container-lg">
    <q-carousel
      class="product-carousel b-radius32 q-mb-lg"
      animated
      v-model="slide"
      arrows
      infinite
    >
      <q-carousel-slide :name="1" img-src="~assets/carousel/1.png" />
    </q-carousel>
    <q-card class="b-radius16">
      <q-card-section class="flex items-center column q-pa-0">
        <div class="flex items-center q-mb-lg">
          <b class="flex items-center fz20">Price</b>
          <b class="fz30 q-mx-sm">${{ price }}</b>
          <div
            class="bg-grey-2 b-radius8 q-pa-xs fz20 text-center"
            style="width: 82px"
          >
            -80%
          </div>
        </div>
        <div
          class="flex bg-grey-2 justify-center items-center b-radius16 quantity-block"
        >
          <b class="fz20">Quantity:</b>
          <div class="flex items-center">
            <q-btn
              class="b-radius10 q-mx-lg"
              padding="md"
              @click="amount && amount--"
              icon="remove"
            />
            <b class="fz20">{{ amount }}</b>
            <q-btn
              class="b-radius10 q-ml-lg"
              padding="md"
              @click="amount++"
              icon="add"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="q-my-lg">
      <p>
        <b
          >Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt.
          Pulvinar sed justo et viverra pellentesque.</b
        >
      </p>
      <p>
        Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim
        elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed
        sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu
        lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem
        feugiat. Neque vulputate in et maecenas porta mi tellus. In massa
        porttitor urna quis volutpat at.
      </p>
    </div>
    <div class="row q-mb-xl">
      <div class="col-12 col-md-8 col-sm-8 q-mb-lg">
        <guaranteed-safe>
          <template #title>
            <span>Guaranteed <b>Safe</b> & <b>Secure</b> Checkout</span>
          </template>
        </guaranteed-safe>
      </div>
      <div class="col-12 col-md-4 col-sm-4 q-pl-lg q-mb-lg support-block">
        <q-card class="b-radius16">
          <q-card-section class="flex justify-around q-my-xs">
            <q-img width="63px" src="~assets/support.png" alt="support" />
            <div class="flex column justify-center">
              <b class="fz20">24/7</b>
              <div>Support</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="flex justify-center column items-center">
      <q-btn
        class="b-radius10 q-mb-md"
        :disable="!amount"
        padding="md"
        style="width: 280px"
        color="primary"
        no-caps
        @click="$router.push('/thank-you')"
      >
        <template #default>
          <span class="fz24">Yes, I want</span>
          <q-icon class="q-ml-md" name="east" />
        </template>
      </q-btn>

      <q-btn
        padding="md"
        flat
        class="b-radius10 fz18"
        style="width: 280px"
        @click="$router.push('/')"
        no-caps
        >No, Thanks</q-btn
      >
    </div>
  </q-page>
</template>

<style lang="scss">
.quantity-block {
  padding: 24px;
  width: 580px;
  @media screen and (max-width: 1023.99px) {
    width: auto;
  }
  @media screen and (max-width: 599.99px) {
    padding: 24px 12px;
  }
}
.product-carousel {
  @media screen and (max-width: 599.99px) {
    height: 226px;
  }
}
.support-block {
  @media screen and (max-width: 599.99px) {
    padding-left: 0;
  }
}
</style>
