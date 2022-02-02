<template>
  <div class="info_box" :class="{ active: isActive }">
    <div class="info_box_inner">
      <div class="player_name">
        <img src="../images/icon/icon_cont.svg" class="icon_cont" alt="cont">
        <span class="runner_area">{{name}}</span>
      </div>
      <div class="player_time">
        <span id="player1_time" class="player_time_area active">{{finishTime}}</span>
        <img src="../images/icon/icon_speaker.svg" class="icon_speaker" alt="speaker">
      </div>
      <div :id="'player_' + (index + 1)  + '_end'"/>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { RunDataActiveRun, Timer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import { DisplaySound } from '@mysrtafes2022-layouts/types/schemas/displaySound';
import * as util from '@mysrtafes2022-layouts/graphics/util/format';

@Component
export default class NameplateForTriple extends Vue {
  @Getter readonly runDataActiveRunReplicant!: RunDataActiveRun;
  @Getter readonly timerReplicant!: Timer;
  @Getter readonly displaySoundReplicant!: DisplaySound;

  @Prop({ type: Number, required: true })
  readonly index!: number;

  get name(): string {
    if (!this.runDataActiveRunReplicant || !this.runDataActiveRunReplicant?.teams[this.index]) {
      return '';
    }
    return this.runDataActiveRunReplicant?.teams[this.index].players[0].name;
  }

  get finishTime(): string {
    if (!this.runDataActiveRunReplicant || !this.runDataActiveRunReplicant?.teams[this.index]) {
      return '';
    }
    const teamId = this.runDataActiveRunReplicant?.teams[this.index].id;
    if (!this.timerReplicant.teamFinishTimes[teamId]) {
      return '';
    }
    const finishTime = this.timerReplicant.teamFinishTimes[teamId];
    if (finishTime.state === 'forfeit') {
      return 'リタイア';
    }
    if (finishTime.state === 'completed') {
      return util.formatSeconds(Math.trunc(finishTime.milliseconds / 1000));
    }
    return '';
  }

  get isActive(): boolean {
    if (!this.runDataActiveRunReplicant || !this.runDataActiveRunReplicant?.teams[this.index]) {
      return false;
    }
    return this.runDataActiveRunReplicant?.teams[this.index].players[0].id
      === this.displaySoundReplicant.playerId;
  }
}
</script>

<style lang="scss" scoped>
</style>
