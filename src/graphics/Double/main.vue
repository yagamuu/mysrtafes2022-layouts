<template>
  <game-layout :clipPath="clipPath">
    <div id="main">
      <game-info/>
      <twitter-notification/>
      <nameplate id="player_1" :index=0 />
      <nameplate id="player_2" :index=1 />
      <estimate displayTimer/>
      <div class="info_box" id="runner_area_wrapper"/>
    </div>
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GameInfo from '../components/GameInfo.vue';
import GameLayout from '../views/GameLayout.vue';
import Nameplate from '../components/Nameplate.vue';
import Estimate from '../components/Estimate.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

@Component({
  components: {
    GameLayout,
    GameInfo,
    Nameplate,
    Estimate,
    TwitterNotification,
  },
})
export default class extends Vue {
  get sdGamePosition(): Box[] {
    const x1 = 145;
    const x2 = 1085;
    const y = 270;
    const width = 690;
    const height = 518;
    return [[x1, x1 + width, y, y + height], [x2, x2 + width, y, y + height]];
  }

  get hdGamePosition(): Box[] {
    const x1 = 30;
    const x2 = 970;
    const y = 270;
    const width = 920;
    const height = 518;
    return [[x1, x1 + width, y, y + height], [x2, x2 + width, y, y + height]];
  }

  get clipPath(): string {
    // eslint-disable-next-line no-restricted-globals
    const params = new URLSearchParams(location.search);
    const boxes = params.get('isHD') ? this.hdGamePosition : this.sdGamePosition;
    return calculateClipPath(boxes);
  }
}
</script>

<style lang="scss" scoped>
  @import url('../styles/reset.css');
  @import url('../styles/common.css');
  @import url('../styles/double.css');
</style>
