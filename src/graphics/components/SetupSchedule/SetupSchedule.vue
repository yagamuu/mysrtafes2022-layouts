<template>
  <div id="schedule">
    <upnext-schedule-component :run-data="upnextRun"/>
    <ondeck-schedule-component
      v-for="(run, index) in ondeckRuns"
      :key="run.id"
      :run-data="run"
      :start-in="upcomingStartIn[index]"
      :style="{top: 630 + 200 * index + 'px'}"
      />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { RunData, RunDataArray } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import UpnextScheduleComponent from './UpnextSchedule.vue';
import OndeckScheduleComponent from './OndeckSchedule.vue';
import * as util from '../../util/format';

@Component({
  components: {
    UpnextScheduleComponent,
    OndeckScheduleComponent,
  },
})
export default class SetupSchedule extends Vue {
  @Getter readonly upcomingRuns!: RunDataArray;

  get upnextRun(): RunData {
    return this.upcomingRuns[0];
  }

  get ondeckRuns(): RunDataArray {
    return this.upcomingRuns.slice(1);
  }

  get upcomingStartIn(): string[] {
    if (!this.upcomingRuns || !this.upcomingRuns[1]) {
      return [];
    }

    const startInArray = [];
    const secondRunStartIn = (this.upcomingRuns[0].estimateS || 0)
      + (this.upcomingRuns[1].setupTimeS || 0);
    startInArray.push(util.formatSecondsToStartInTime(secondRunStartIn));

    if (!this.upcomingRuns[2]) {
      return startInArray;
    }
    const thirdRunStartIn = secondRunStartIn
    + (this.upcomingRuns[1].estimateS || 0) + (this.upcomingRuns[2].setupTimeS || 0);
    startInArray.push(util.formatSecondsToStartInTime(thirdRunStartIn));
    return startInArray;
  }
}
</script>

<style lang="scss" scoped>
</style>
