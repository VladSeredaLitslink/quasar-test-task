<script setup>
import OrderSummary from "components/OrderSummary.vue";
import GuaranteedSafe from "components/GuaranteedSafe.vue";
import ExpandedCart from "components/ExpandedCart.vue";
</script>

<template>
  <q-page class="container">
    <div class="row">
      <q-card class="col-12 col-md-7 b-radius16 q-mb-lg">
        <expanded-cart class="q-mt-md"/>

        <q-card-section class="flex items-center column">
          <q-img
            class="q-mb-lg"
            width="180px"
            src="~assets/thx.png"
            alt="thanks logo"
          />
          <div class="text-center">
            <b class="fz24">Thank you for your order</b>
            <br />
            <span class="fz18">Your order is confirmed</span>
          </div>
          <q-btn
            class="b-radius16 q-my-xl"
            padding="md"
            style="width: 280px"
            color="primary"
            no-caps
            @click="$router.push('/product')"
          >
            <template #default>
              <q-icon class="q-mr-md" name="west" />
              <span class="fz16">Back To Shop</span>
            </template>
          </q-btn>
          <q-card class="b-radius16 bg-grey-2">
            <div style="line-height: 24px">
              <div class="row">
                <div class="col-3">Name:</div>
                <div class="col-9">Oleo Bone</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-3">Email:</div>
                <div class="col-9">oleo_bone@gmail.com</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-3">Ship to:</div>
                <div class="col-9">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-3">Bill to:</div>
                <div class="col-9">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-3">payment:</div>
                <div class="col-9">Credit Card</div>
              </div>
              <hr />
            </div>
          </q-card>
        </q-card-section>
      </q-card>
      <div class="right-section col-12 col-md-5">
        <order-summary
          class="q-mb-lg"
          v-if="$q.screen.width > $q.screen.sizes.md"
        />
        <guaranteed-safe>
          <template #title>
            <span>Secure SSL Encryption & Guaranteed Safe Checkout</span>
          </template>
        </guaranteed-safe>
      </div>
    </div>
  </q-page>
</template>
