<script setup>
import { ref, watch } from "vue";
import GuaranteedSafe from "components/GuaranteedSafe.vue";

const slide = ref(1);

const PRICE = 50;
const price = ref(PRICE);
const amount = ref(1);

watch(amount, (val) => {
  price.value = val * PRICE;
});
</script>
<template>
  <q-page class="container container-lg q-pa-xl">
    <q-carousel
      class="b-radius32 q-mb-lg"
      animated
      v-model="slide"
      arrows
      infinite
    >
      <q-carousel-slide :name="1" img-src="~assets/carousel/1.png" />
    </q-carousel>
    <q-card class="b-radius16">
      <q-card-section class="flex items-center column">
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
          class="flex bg-grey-2 items-center q-pa-md q-pl-xl q-pr-xl b-radius16"
        >
          <b class="fz20">Quantity:</b>
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
        <guaranteed-safe title="Guaranteed Safe & Secure Checkout" />
      </div>
      <div class="col-12 col-md-4 col-sm-4 q-pl-lg q-mb-lg">
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
