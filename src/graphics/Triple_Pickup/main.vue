<template>
  <game-layout :clipPath="clipPath">
    <div id="main">
      <game-info/>
      <div class="info_box"/>
      <twitter-notification/>
      <nameplate id="player_1" :index=0 />
      <nameplate id="player_2" :index=1 />
      <nameplate id="player_3" :index=2 />
      <estimate displayTimer/>
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
    return [[73, 338, 812, 1011], [443, 708, 812, 1011], [909, 1751, 378, 1010]];
  }

  get hdGamePosition(): Box[] {
    return [[30, 380, 812, 1011], [400, 750, 812, 1011], [770, 1890, 378, 1010]];
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
  @import url('../styles/triple_pickup.css');
</style>
