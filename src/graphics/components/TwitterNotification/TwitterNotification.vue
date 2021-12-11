<template>
  <transition name="twitter">
    <twitter-text-box
      v-if="activeTweetReplicant"
      :position="position"
      :tweet="activeTweetReplicant"
      :line="line"/>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { ComponentPosition } from '@mysrtafes2022-layouts/types/ComponentPosition';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import TwitterTextBox from './TwitterTextBox.vue';

@Component({
  components: {
    TwitterTextBox,
  },
})
export default class TwitterNotification extends Vue {
  @Getter readonly activeTweetReplicant!: ActiveTweet;

  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Number, default: 3 })
  readonly line!: number;
}
</script>

<style lang="scss" scoped>
@import '../../styles/setupLayout.scss';

.twitter-enter-active {
  transition: all 1s;
}

.twitter-leave-active {
  transition: all 1s;
}

.twitter-enter, .twitter-leave-to {
  transform: translateY(-100%);
}
</style>
