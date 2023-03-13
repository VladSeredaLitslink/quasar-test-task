<template>
  <q-card class="b-radius16">
    <q-card-section class="flex items-center column">
      <div class="q-mb-lg flex items-center no-wrap">
        <q-icon class="q-mr-sm" size="sm" name="lock" />
        <slot name="title"></slot>
      </div>
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
          src="~assets/secure/3.png"
        />
        <q-img
          width="40px"
          height="24px"
          class="q-mr-sm"
          src="~assets/secure/4.png"
        />
        <q-img
          width="40px"
          height="24px"
          class="q-mr-sm"
          src="~assets/secure/5.png"
        />
        <q-img
          width="40px"
          height="24px"
          class="q-mr-sm"
          src="~assets/secure/6.png"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
