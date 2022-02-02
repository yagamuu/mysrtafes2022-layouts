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
    const x = 120;
    const y = 880;
    const width = 330;
    const height = 90;
    return [[x, x + width, y, y + height]];
  }

  get sdGamePosition(): Box[] {
    const x = 655;
    const y = 222;
    const width = 1050;
    const height = 789;
    return [[x, x + width, y, y + height]];
  }

  get hdGamePosition(): Box[] {
    const x = 480;
    const y = 222;
    const width = 1400;
    const height = 789;
    return [[x, x + width, y, y + height]];
  }

  get clipPath(): string {
    // eslint-disable-next-line no-restricted-globals
    const params = new URLSearchParams(location.search);
    const boxes = params.get('isHD')
      ? [...this.timerPosition, ...this.hdGamePosition]
      : [...this.timerPosition, ...this.sdGamePosition];
    return calculateClipPath(boxes);
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/reset.css');
  @import url('../styles/common.css');
  @import url('../styles/single.css');
</style>
