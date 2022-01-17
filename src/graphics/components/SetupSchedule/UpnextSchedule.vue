<template>
  <div id="run_1" class="next">
    <div class="box game">
      <p class="title">{{runData.game}} / {{runData.system}}</p>
      <div class="info">
        <div class="category"><span class="label">{{runData.category}}</span></div>
        <div class="runner"><span class="label">{{runners}}</span></div>
      </div>
      <setup-information/>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { RunData } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import SetupInformation from '../SetupInformation/SetupInformation.vue';

@Component({
  components: {
    SetupInformation,
  },
})
export default class UpnextSchedule extends Vue {
  @Prop({ type: Object, required: true })
  readonly runData!: RunData;

  get runners(): string {
    // eslint-disable-next-line max-len
    return this.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join('、');
  }
}
</script>

<style lang="scss" scoped>
</style>
