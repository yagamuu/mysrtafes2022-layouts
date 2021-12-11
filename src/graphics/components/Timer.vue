<template>
  <div class="runInformation" :style="position">
    <span :style="{color: timerColor}">{{time}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';

@Component
export default class Timer extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: String, required: true })
  readonly time!: string;

  @Prop({ type: String, required: true })
  readonly timerStatus!: string;

  get timerColor(): string {
    if (this.timerStatus === 'running') {
      return '#FFFFFF';
    }
    if (this.timerStatus === 'finished') {
      return '#FFFF52';
    }

    return '#9A9FA1';
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.runInformation {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
  font-size: 38px;
}
</style>
