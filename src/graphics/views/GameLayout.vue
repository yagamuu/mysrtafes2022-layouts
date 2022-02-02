<template>
  <overlay-base :clipPath="clipPath" :backgroundUri="backgroundUri">
    <slot/>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { storeModule } from '@mysrtafes2022-layouts/graphics/store/gameLayoutStore';
import OverlayBase from './OverlayBase.vue';

@Component({
  components: {
    OverlayBase,
  },
})
export default class GameLayout extends Vue {
  @Prop(String)
  readonly clipPath!: string;

  get backgroundUri(): string {
    return storeModule.gameLayoutBgAssets[0].url;
  }
}
</script>

<style lang="scss" scoped>
</style>
