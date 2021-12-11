<template>
  <div class="upnextSchedule">
    <div class="runInformation">
      <div class="gameTitle" ref="gameTitleParent">
        <span ref="gameTitle" :style="{display: 'block', fontSize: 29 * fontSizeModifier + 'px'}">
          {{runData.game}}
        </span>
      </div>
      <one-line-text-block
        :fontSize="19"
        :text="runData.category + ` | ` + runners"
        align="left"
        :width="790 * 0.7"/>
    </div>
    <div class="startIn">
      <span>このあとすぐ！</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import type { RunData } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import OneLineTextBlock from '../OneLineTextBlock.vue';

@Component({
  components: {
    OneLineTextBlock,
  },
})
export default class UpnextSchedule extends Vue {
  @Prop({ type: Object, required: true })
  readonly runData!: RunData;

  get runners(): string {
    // eslint-disable-next-line max-len
    return this.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
  }

  fontSizeModifier = 1;

  @Watch('runData')
  onChangeText(): void {
    this.fontSizeModifier = 1;
  }

  mounted(): void {
    this.adjustmentFontSize();
  }

  updated(): void {
    this.adjustmentFontSize();
  }

  adjustmentFontSize(): void {
    const parentDom: any = this.$refs.gameTitleParent;
    const textDom: any = this.$refs.gameTitle;

    if (!parentDom || !textDom) return;

    const parentHeight = parentDom.clientHeight;
    const textHeight = textDom.clientHeight;

    if (parentHeight < textHeight && this.fontSizeModifier >= 0.1) {
      this.fontSizeModifier *= 0.95;
    }
  }
}
</script>

<style lang="scss" scoped>

.upnextSchedule {
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4%;
  border: solid 3px #E34E4D;
  color: #0d0d59;
  font-size: 29px;
  width: 790px;
  height: 120px;
  margin: 10px 0;
}

.runInformation {
  width: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gameTitle {
  height: 70px;
}

.startIn {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category {
  font-size: 19px;
}
</style>
