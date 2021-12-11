<template>
  <div class="parent" :style="{width: width + 'px', justifyContent: align}" ref="parent">
    <span
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

@Component
export default class OneLineTextBlock extends Vue {
  @Prop({ type: String, default: '' })
  readonly text!: string;

  @Prop({ type: Number, default: 29 })
  readonly fontSize!: number;

  @Prop({ type: String, default: 'center' })
  readonly align!: string;

  @Prop({ type: Number, required: true })
  readonly width!: number;

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

    const parentWidth = parentDom.clientWidth;
    const textWidth = textDom.clientWidth;

    if (parentWidth < textWidth && this.fontSizeModifier >= 0.1) {
      this.fontSizeModifier *= 0.95;
    }
  }
}
</script>

<style lang="scss" scoped>

.parent {
  display: flex;
  white-space: nowrap;
}

</style>
