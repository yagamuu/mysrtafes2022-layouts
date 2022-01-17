<template>
  <div class="box">
    <div id="twitter_user">
      <span id="twitter_id">@{{tweet.name}}</span>
    </div>
    <div id="tweet_text">
      {{tweet.text}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';

@Component({
  components: {},
})
export default class TwitterTextBox extends Vue {
  @Prop({ type: Object, required: true })
  readonly tweet!: ActiveTweet;
}
</script>

<style lang="scss" scoped>
</style>
