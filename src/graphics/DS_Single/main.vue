<template>
  <game-layout :clipPath="clipPath">
    <div id="main">
      <game-info/>
      <twitter-notification/>
      <div class="info_box"/>
      <estimate/>
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
    const x = 110;
    const y = 919;
    const width = 216;
    const height = 60;
    return [[x, x + width, y, y + height]];
  }

  get leftGamePosition(): Box[] {
    const x = 40;
    const y = 590;
    const width = 412;
    const height = 309;
    return [[x, x + width, y, y + height]];
  }

  get rightGamePosition(): Box[] {
    const x = 462;
    const y = 30;
    const width = 1160;
    const height = 870;
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
  @import url('../styles/ds_single.css');
</style>
