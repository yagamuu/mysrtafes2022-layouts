<template>
  <div id="tweet" :class="isActive">
    <twitter-text-box
      v-if="activeTweetReplicant"
      :tweet="activeTweetReplicant"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import TwitterTextBox from './TwitterTextBox.vue';

@Component({
  components: {
    TwitterTextBox,
  },
})
export default class TwitterNotification extends Vue {
  @Getter readonly activeTweetReplicant!: ActiveTweet;

  get isActive(): string {
    return this.activeTweetReplicant ? 'active' : '';
  }
}
</script>

<style lang="scss" scoped>

.twitter-enter-active {
  transition: 0.4s ease;
}

.twitter-leave-active {
  transition: 0.4s ease;
}

.twitter-enter, .twitter-leave-to {
  left: -10px;
}
</style>
