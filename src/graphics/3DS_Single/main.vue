<template>
  <game-layout :clipPath="clipPath">
    <div id="main">
      <game-info/>
      <twitter-notification/>
      <estimate/>
      <div class="info_box" id="runner_area_wrapper"/>
    </div>
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GameInfo from '../components/GameInfo.vue';
import GameLayout from '../views/GameLayout.vue';
import Estimate from '../components/Estimate.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

@Component({
  components: {
    GameLayout,
    GameInfo,
    Estimate,
    TwitterNotification,
  },
})
export default class extends Vue {
  get timerPosition(): Box[] {
    const x = 115;
    const y = 932.5;
    const width = 216;
    const height = 64;
    return [[x, x + width, y, y + height]];
  }

  get leftGamePosition(): Box[] {
    const x = 338;
    const y = 279;
    const width = 612;
    const height = 459;
    return [[x, x + width, y, y + height]];
  }

  get rightGamePosition(): Box[] {
    const x = 966;
    const y = 183;
    const width = 925;
    const height = 555;
    return [[x, x + width, y, y + height]];
  }

  get clipPath(): string {
    return calculateClipPath([
      ...this.timerPosition,
      ...this.leftGamePosition,
      ...this.rightGamePosition,
    ]);
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/reset.css');
  @import url('../styles/common.css');
  @import url('../styles/3ds_single.css');
</style>
