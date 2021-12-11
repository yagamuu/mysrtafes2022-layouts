<template>
  <div class="tweet" :style="position">
    <span class="name">{{tweet.name}}</span>
    <span class="text" :style="{'-webkit-line-clamp' : line}">
      {{tweet.text}}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';

@Component({
  components: {},
})
export default class TwitterTextBox extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Object, required: true })
  readonly tweet!: ActiveTweet;

  @Prop({ type: Number, default: 3 })
  readonly line!: number;
}
</script>

<style lang="scss" scoped>
@import '../../styles/setupLayout.scss';

.tweet {
  @include baseCompornent();
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  justify-content: left;
  font-family: 'mplus-1c-medium';
  overflow: hidden;
  z-index: 0;
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  line-height: 32px;
  /*text-shadow:
  rgb(0, 0, 0) 2px 0px 0px,
  rgb(0, 0, 0) 1.75517px 0.958851px 0px,
  rgb(0, 0, 0) 1.0806px 1.68294px 0px,
  rgb(0, 0, 0) 0.141474px 1.99499px 0px,
  rgb(0, 0, 0) -0.832294px 1.81859px 0px,
  rgb(0, 0, 0) -1.60229px 1.19694px 0px,
  rgb(0, 0, 0) -1.97998px 0.28224px 0px,
  rgb(0, 0, 0) -1.87291px -0.701566px 0px,
  rgb(0, 0, 0) -1.30729px -1.5136px 0px,
  rgb(0, 0, 0) -0.421592px -1.95506px 0px,
  rgb(0, 0, 0) 0.567324px -1.91785px 0px,
  rgb(0, 0, 0) 1.41734px -1.41108px 0px,
  rgb(0, 0, 0) 1.92034px -0.558831px 0px;*/
}

.name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

</style>
