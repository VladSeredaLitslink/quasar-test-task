<script setup>
import OrderSummary from "components/OrderSummary.vue";
import {ref} from "vue"

const expansion = ref(false);
</script>
<template>
  <div v-if="$q.screen.width < $q.screen.sizes.md">
    <q-list bordered class="rounded-borders b-radius16 q-mb-lg">

      <q-expansion-item v-model="expansion" hide-expand-icon class="q-my-sm">
        <template v-slot:header="{ expanded }">
          <q-item-section avatar class="flex items-center">
            <q-img height="24px" width="24px" src="~assets/shopping-cart.png"/>
          </q-item-section>

          <div class="flex justify-between fz16 full-width">
            <div class="flex items-center">
              <span class="fz16">{{ expanded ? 'Hide' : 'Show' }} order summary</span>
              <q-icon class="q-ml-md" size="22px" :name="expanded? 'expand_less': 'keyboard_arrow_down'" :style="{color: expanded ? '#7782F1': '#979AB8'}"/>
            </div>
            <div class="flex items-center"><b>€69.00</b></div>
          </div>
        </template>
      </q-expansion-item>
    </q-list>
    <order-summary v-if="expansion" class="q-mb-lg"/>
  </div>
</template>
