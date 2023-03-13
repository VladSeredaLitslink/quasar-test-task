<script setup>
import { ref } from "vue";

const discountCode = ref();
</script>
<template>
  <q-card class="b-radius16">
    <q-card-section class="fz16">
      <div class="q-mb-lg fz24"><b>Order Summary</b></div>
      <div class="flex justify-between items-center q-mb-md">
        <div class="flex items-center">
          <div class="q-mr-md">
            <q-img
              class="cursor-pointer"
              @click="$router.push('/product')"
              width="55px"
              height="55px"
              src="~assets/product.png"
            />
            <q-badge color="primary" rounded align="top">1</q-badge>
          </div>
          <span>Nike sneakers</span>
        </div>
        <b>€69.00</b>
      </div>
      <div class="row q-mb-md">
        <div class="col-sm-9 col-xs-12 q-pr-lg discount-input">
          <q-input
            rounded
            outlined
            class="q-mb-lg"
            v-model="discountCode"
            label="Discount code"
          />
        </div>
        <div class="col-sm-3 col-xs-12">
          <q-btn
            class="b-radius16 fz16 full-width"
            style="height: 56px"
            no-caps
            color="primary"
            >Apply</q-btn
          >
        </div>
      </div>
      <div class="flex justify-between q-mb-md">
        <span>Subtotal</span>
        <b>€69.00</b>
      </div>
      <div class="flex justify-between q-mb-md">
        <span>Shipping</span>
        <b>--</b>
      </div>
      <div class="flex justify-between q-mb-md">
        <span>Discount</span>
        <b>--</b>
      </div>

      <hr />

      <div class="flex justify-between q-mb-md">
        <span>Total</span>
        <b>€69.00</b>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss">
.discount-input {
  @media screen and (max-width: 599.99px) {
    padding-right: 0;
  }
}
</style>
