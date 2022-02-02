<template>
  <overlay-base :clipPath="clipPath" :backgroundAssets="gameLayoutBgAssets">
    <slot/>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';
import OverlayBase from './OverlayBase.vue';

@Component({
  components: {
    OverlayBase,
  },
})
export default class GameLayout extends Vue {
  @Getter readonly gameLayoutBgAssets!: Assets;

  @Prop(String)
  readonly clipPath!: string;
}
</script>

<style lang="scss" scoped>
</style>
