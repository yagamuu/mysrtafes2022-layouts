<template>
  <div class="gameTitle" :style="position" ref="parent">
    <span
      class="text"
      ref="text"
      :style="{fontSize: fontSize * fontSizeModifier + 'px'}"
    >
      {{text}}
    </span>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';

@Component
export default class GameTitle extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: String, required: true })
  readonly text!: string;

  @Prop({ type: Number, default: 38 })
  readonly fontSize!: number;

  fontSizeModifier = 1;

  @Watch('text')
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
    const parentDom: any = this.$refs.parent;
    const textDom: any = this.$refs.text;

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
@import '../styles/gameLayout.scss';

.gameTitle {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
