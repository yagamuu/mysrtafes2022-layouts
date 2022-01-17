<template>
  <div
    id="root"
    :style="{backgroundImage: `url(${backgroundUri})`, backgroundsize: 'cover'}"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class OverlayBase extends Vue {
  @Prop({ type: String, default: '' })
  readonly backgroundUri!: string;

  created(): void {}
}
</script>
