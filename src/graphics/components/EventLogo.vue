<template>
  <img :src="url">
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EventLogo extends Vue {
  @Prop(String)
  readonly url!: string;
}
</script>
