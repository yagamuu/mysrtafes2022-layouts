<template>
  <game-layout :clipPath="clipPath">
    <div id="main">
      <game-info/>
      <div class="info_box"/>
      <twitter-notification/>
      <nameplate-for-triple id="player_1" :index=0 />
      <nameplate-for-triple id="player_2" :index=1 />
      <nameplate-for-triple id="player_3" :index=2 />
      <estimate displayTimer/>
    </div>
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GameInfo from '../components/GameInfo.vue';
import GameLayout from '../views/GameLayout.vue';
import NameplateForTriple from '../components/NameplateForTriple.vue';
import Estimate from '../components/Estimate.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';

@Component({
  components: {
    GameLayout,
    GameInfo,
    NameplateForTriple,
    Estimate,
    TwitterNotification,
  },
})
export default class extends Vue {
  get sdGamePosition(): Box[] {
    return [[677, 1242, 30, 454], [97, 662, 593, 1017], [1257, 1822, 593, 1017]];
  }

  get hdGamePosition(): Box[] {
    return [[610, 1310, 30, 425], [30, 730, 605, 1000], [1190, 1890, 605, 1000]];
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
  @import url('../styles/triple.css');
</style>
