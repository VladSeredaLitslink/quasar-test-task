<script setup>
import { ref } from "vue";
import { useValidator } from "../utils/validator";
import GuaranteedSafe from "components/GuaranteedSafe.vue";
import OrderSummary from "components/OrderSummary.vue";

const { required, emailValidator, creditCardValidator } = useValidator();

const contactInformation = ref({
  exclusiveOffers: true,
});
const shippingAddress = ref({});
const shippingMethod = ref("free");
const billingAddress = ref("same");
const paymentMethod = ref("creditCard");
const paymentData = ref({});
const acceptPolicy = ref(false);

const emailRef = ref(null);
const firstNameRef = ref(null);
const lastNameRef = ref(null);
const cardNumberRef = ref(null);

const cities = ["Kharkov", "Kiev"];

const submit = () => {
  firstNameRef.value.validate();
  lastNameRef.value.validate();
  emailRef.value.validate();
  cardNumberRef.value.validate();
};
</script>

<template>
  <q-page class="q-py-xl container">
    <div class="row">
      <q-card class="col-12 col-md-8 b-radius16">
        <q-card-section>
          <h4 class="text-bold q-mt-none"><b>Checkout</b></h4>
          <p class="fz20">
            Strong demand! Complete your order before it's too late!
          </p>
          <q-card class="bg-grey-2 q-my-lg b-radius16">
            <div class="fz16">Your cart is reserved for 10:00 minutes.</div>
          </q-card>
          <q-card class="b-radius16 q-my-lg">
            <q-card-section class="q-pt-none">
              <b class="fz20">Express Checkout</b>
            </q-card-section>
            <q-card-section class="q-py-none express-checkout">
              <q-btn class="b-radius16 shop-pay"
                ><img src="~assets/shopPay.png"
              /></q-btn>
              <q-btn class="b-radius16 q-mx-md pay-pal"
                ><img src="~assets/payPal.png"
              /></q-btn>
              <q-btn class="b-radius16 google-pay"
                ><img src="~assets/googlePay.png"
              /></q-btn>
            </q-card-section>
          </q-card>
          <q-card class="b-radius16 q-my-lg bg-grey-2">
            <q-card-section class="q-px-lg">
              <div class="row">
                <div class="col-10 q-pr-md">
                  <div class="q-mb-sm">
                    <b class="fz20">Lifetime Warranty🔥</b>
                  </div>
                  <span>
                    Add a lifetime warranty & enjoy peace of mind for life with
                    your dream collections order for just $4.99
                  </span>
                </div>
                <div class="col-2 flex items-center">
                  <q-btn
                    no-caps
                    class="b-radius10 fz16 full-width"
                    color="primary"
                    >Add -<br />$4.99</q-btn
                  >
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card-section>
            <div class="q-mb-md fz24"><b>Contact information</b></div>
            <q-input
              rounded
              outlined
              class="q-mb-xs"
              v-model="contactInformation.email"
              lazy-rules
              :rules="[
                () => required(contactInformation.email, 'email address'),
                emailValidator,
              ]"
              ref="emailRef"
              label="Email Address"
            >
              <template v-slot:prepend>
                <q-icon class="q-pl-md" name="email" />
              </template>
            </q-input>
            <q-input
              rounded
              outlined
              class="q-mb-lg"
              v-model="contactInformation.phone"
              mask="(###) ### - ####"
              label="Phone Number"
            >
              <template v-slot:prepend>
                <q-icon class="q-pl-md" name="phone" />
              </template>
            </q-input>
            <div>
              <q-checkbox
                class="fz16"
                color="primary"
                v-model="contactInformation.exclusiveOffers"
                label="Sign up for exclusive offers and news"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div class="q-mb-md fz24"><b>Shipping address</b></div>
            <div class="row">
              <div class="col-12">
                <q-select
                  rounded
                  outlined
                  class="q-mb-lg"
                  v-model="shippingAddress.country"
                  :options="cities"
                  label="Select a Country"
                >
                  <template v-slot:prepend>
                    <q-icon class="q-pl-md" name="pin_drop" />
                  </template>
                </q-select>
              </div>
              <div class="col-6">
                <q-input
                  rounded
                  outlined
                  class="q-mb-xs q-mr-md"
                  v-model="shippingAddress.firstName"
                  ref="firstNameRef"
                  lazy-rules
                  :rules="[
                    () => required(shippingAddress.firstName, 'first name'),
                  ]"
                  label="First Name"
                >
                  <template v-slot:prepend>
                    <q-icon class="q-pl-md" name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col-6">
                <q-input
                  rounded
                  outlined
                  class="q-mb-xs"
                  v-model="shippingAddress.lastName"
                  ref="lastNameRef"
                  lazy-rules
                  :rules="[
                    () => required(shippingAddress.lastName, 'last name'),
                  ]"
                  label="Last Name"
                >
                  <template v-slot:prepend>
                    <q-icon class="q-pl-md" name="person" />
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input
                  rounded
                  outlined
                  class="q-mb-lg"
                  v-model="shippingAddress.address"
                  label="Address"
                >
                  <template v-slot:prepend>
                    <q-icon class="q-pl-md" name="photo_camera" />
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input
                  rounded
                  outlined
                  class="q-mb-lg"
                  v-model="shippingAddress.apartment"
                  label="Apartment, suit, etc (Optional)"
                >
                  <template v-slot:prepend>
                    <q-icon class="q-pl-md" name="apartment" />
                  </template>
                </q-input>
              </div>
              <div class="col-6">
                <q-input
                  rounded
                  outlined
                  class="q-mb-lg q-mr-md"
                  v-model="shippingAddress.city"
                  label="City"
                />
              </div>
              <div class="col-6">
                <q-input
                  rounded
                  outlined
                  class="q-mb-lg"
                  v-model="shippingAddress.postCode"
                  label="Post Code"
                />
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="q-mb-md fz24"><b>Shipping method</b></div>
            <q-list>
              <q-item
                tag="label"
                class="b-radius16 bg-grey-2 q-mb-lg"
                v-ripple="false"
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="shippingMethod"
                    val="free"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Free Shipping</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" class="b-radius16 bg-grey-2" v-ripple="false">
                <q-item-section avatar>
                  <q-radio v-model="shippingMethod" val="DHL" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>DHL with price</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-section>
            <div class="q-mb-md">
              <b class="fz24">Billing address</b><br />
              <span>Specify the address for your payment option</span>
            </div>
            <q-list>
              <q-item
                tag="label"
                class="b-radius16 bg-grey-2 q-mb-lg"
                v-ripple="false"
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="billingAddress"
                    val="same"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Same as shipping address</q-item-label>
                </q-item-section>
              </q-item>

              <div class="b-radius16 bg-grey-2">
                <q-item tag="label" v-ripple="false">
                  <q-item-section avatar>
                    <q-radio
                      v-model="billingAddress"
                      val="different"
                      color="primary"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Use a different billing address</q-item-label>
                  </q-item-section>
                </q-item>
                <q-card-section v-if="billingAddress === 'different'">
                  <div class="row">
                    <div class="col-12">
                      <q-select
                        rounded
                        outlined
                        class="q-mb-lg"
                        v-model="shippingAddress.country"
                        label="Select a Country"
                        :options="cities"
                      >
                        <template v-slot:prepend>
                          <q-icon class="q-pl-md" name="pin_drop" />
                        </template>
                      </q-select>
                    </div>
                    <div class="col-6">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg q-mr-md"
                        v-model="shippingAddress.firstName"
                        label="First Name"
                      >
                        <template v-slot:prepend>
                          <q-icon class="q-pl-md" name="person" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-6">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg"
                        v-model="shippingAddress.lastName"
                        label="Last Name"
                      >
                        <template v-slot:prepend>
                          <q-icon class="q-pl-md" name="person" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-12">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg"
                        v-model="shippingAddress.address"
                        label="Address"
                      >
                        <template v-slot:prepend>
                          <q-icon class="q-pl-md" name="photo" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-12">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg"
                        v-model="shippingAddress.apartment"
                        label="Apartment, suit, etc (Optional)"
                      >
                        <template v-slot:prepend>
                          <q-icon class="q-pl-md" name="apartment" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-6">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg q-mr-md"
                        v-model="shippingAddress.city"
                        label="City"
                      />
                    </div>
                    <div class="col-6">
                      <q-input
                        rounded
                        outlined
                        class="q-mb-lg"
                        v-model="shippingAddress.postCode"
                        label="Post Code"
                      />
                    </div>
                  </div>
                </q-card-section>
              </div>
            </q-list>
          </q-card-section>
        </q-card-section>
      </q-card>
      <div class="col-12 col-md-4 q-pl-lg">
        <order-summary
          class="desktop-only"
          v-if="$q.screen.width > $q.screen.sizes.md"
        />
        <guaranteed-safe class="q-my-lg" />
        <q-card class="b-radius16 q-mb-lg">
          <q-card-section>
            <div class="q-mb-md fz18"><b>The ultimate jewellery club</b></div>
            <span
              >Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices
              tincidunt. Pulvinar sed justo et viverra pellentesque.</span
            >
            <q-list class="q-mt-md">
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>

                <q-item-section>Extra 10$ off!</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>

                <q-item-section
                  >Free shipping on marked club items!</q-item-section
                >
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>

                <q-item-section
                  >Free returns on marked club items!</q-item-section
                >
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card class="b-radius16">
          <q-card-section>
            <div class="q-mb-lg fz24"><b>Payment Method</b></div>
            <q-list>
              <div class="b-radius16 q-mb-lg bg-grey-2">
                <q-item tag="label" v-ripple="false">
                  <q-item-section avatar>
                    <q-radio
                      v-model="paymentMethod"
                      val="creditCard"
                      color="primary"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="flex justify-between items-center">
                      <div>Credit Card</div>
                      <div>
                        <q-img
                          width="40px"
                          height="24px"
                          class="q-mr-sm"
                          src="~assets/secure/1.png"
                        />
                        <q-img
                          width="40px"
                          height="24px"
                          class="q-mr-sm"
                          src="~assets/secure/2.png"
                        />
                        <q-img
                          width="40px"
                          height="24px"
                          class="q-mr-sm"
                          src="~assets/secure/4.png"
                        />
                        <q-btn class="b-radius10" size="sm" outline
                          >& more</q-btn
                        >
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <div v-if="paymentMethod === 'creditCard'" class="row q-pa-md">
                  <div class="col-12">
                    <q-input
                      rounded
                      outlined
                      class="q-mb-xs"
                      v-model="paymentData.cardNumber"
                      lazy-rules
                      :rules="[
                        () => required(paymentData.cardNumber, 'card number'),
                        creditCardValidator,
                      ]"
                      ref="cardNumberRef"
                      mask="#### #### #### ####"
                      label="Card number"
                    >
                      <template v-slot:prepend>
                        <q-icon name="payment" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12">
                    <q-input
                      rounded
                      outlined
                      class="q-mb-lg"
                      v-model="paymentData.name"
                      label="Name on the card"
                    >
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6">
                    <q-input
                      rounded
                      outlined
                      class="q-mb-lg q-mr-md"
                      v-model="paymentData.mmyy"
                      label="MM/YY"
                    />
                  </div>
                  <div class="col-6">
                    <q-input
                      rounded
                      outlined
                      class="q-mb-lg"
                      v-model="paymentData.cvv"
                      label="CVV"
                    >
                      <template v-slot:prepend>
                        <q-icon name="lock" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>
              <q-item tag="label" class="b-radius16 bg-grey-2" v-ripple="false">
                <q-item-section avatar>
                  <q-radio
                    v-model="paymentMethod"
                    val="payPal"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="flex justify-between items-center">
                    <div>Paypal</div>
                    <div>
                      <q-img
                        width="40px"
                        height="24px"
                        class="q-mr-sm"
                        src="~assets/secure/3.png"
                      />
                    </div>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-checkbox class="q-my-lg" color="primary" v-model="acceptPolicy">
              <template #default>
                By checking this box, I acknowledge that I have read and agree
                to the <b>Terms of Service</b>, and
                <b>Monthly Billing Terms</b> of this website and want to opt-in
                for the monthly billed Dream Collection Club®
              </template>
            </q-checkbox>
            <q-btn
              class="b-radius10 full-width"
              color="primary"
              size="lg"
              no-caps
              @click="submit"
              >Complete Purchase
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.express-checkout {
  .q-btn {
    width: 146px;
    height: 50px;
  }
  .shop-pay {
    background: rgba(90, 49, 244, 0.1);
    border: 1px solid rgba(90, 49, 244, 0.6);
  }
  .pay-pal {
    background: rgba(17, 57, 132, 0.1);
    border: 1px solid rgba(17, 57, 132, 0.6);
  }
  .google-pay {
    background: rgba(234, 64, 50, 0.1);
    border: 1px solid rgba(234, 64, 50, 0.6);
  }
}
</style>
