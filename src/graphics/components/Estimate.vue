<template>
  <div class="info_box_time">
    <div class="time_area_wrapper">
      <img src="../images/icon/icon_timer.svg" class="icon_timer" alt="timer">
      <span class="time_area" v-if="displayTimer">{{time}}</span>
    </div>
    <span id="est" class="time">/ {{estimate}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { RunDataActiveRun, Timer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import * as util from '@mysrtafes2022-layouts/graphics/util/format';

@Component
export default class Estimate extends Vue {
  @Getter readonly runDataActiveRunReplicant!: RunDataActiveRun;
  @Getter readonly timerReplicant!: Timer;

  @Prop({ type: Boolean, default: false })
  readonly displayTimer!: boolean;

  get estimate(): string {
    const estimateS = this.runDataActiveRunReplicant?.estimateS ?? 0;
    return util.formatSeconds(estimateS);
  }

  get time(): string {
    const { milliseconds } = this.timerReplicant;
    return util.formatSeconds(Math.trunc(milliseconds / 1000));
  }
}
</script>

<style lang="scss" scoped>
</style>
