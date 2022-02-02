<template>
  <div class="box game">
    <div class="title_area">
      <p class="title">{{title}} / {{system}}</p>
      <div class="category"><span class="label">{{category}}</span></div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { RunDataActiveRun } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';

@Component
export default class GameInfo extends Vue {
  @Getter readonly runDataActiveRunReplicant!: RunDataActiveRun;

  get title(): string {
    return this.runDataActiveRunReplicant?.game ?? '';
  }

  get system(): string {
    return this.runDataActiveRunReplicant?.system ?? '';
  }

  get category(): string {
    return this.runDataActiveRunReplicant?.category ?? '';
  }
}
</script>

<style lang="scss" scoped>
</style>
