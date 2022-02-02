<template>
  <div class="later_than_next">
    <div class="box game">
      <p class="title">{{runData.game}} / {{runData.system}}</p>
      <div class="info">
        <div class="category"><span class="label">{{runData.category}}</span> /</div>
        <div class="runner"><span class="label">{{runners}}</span></div>
      </div>
    </div>
    <div class="start_time">
      <span class="label">{{startIn}} 後</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { RunData } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';

@Component({
})
export default class OndeckSchedule extends Vue {
  @Prop({ type: Object, required: true })
  readonly runData!: RunData;

  @Prop({ type: String, required: true })
  readonly startIn!: string;

  get runners(): string {
    // eslint-disable-next-line max-len
    return this.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
  }
}
</script>

<style lang="scss" scoped>
</style>
