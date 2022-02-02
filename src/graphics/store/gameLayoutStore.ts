import { ReplicantModule } from '@mysrtafes2022-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import type { ActiveTweet } from '@mysrtafes2022-layouts/types/schemas/nodecgTwitterWidget';
import type { RunDataActiveRun, RunDataArray, Timer } from '@mysrtafes2022-layouts/types/schemas/speedcontrol';
import { DisplaySound } from '@mysrtafes2022-layouts/types/schemas/displaySound';
import type { Assets } from '@mysrtafes2022-layouts/types/schemas/assets';

Vue.use(Vuex);

@Module({ name: 'GameLayoutModule' })
class GameLayoutModule extends VuexModule {
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get runDataArrayReplicant(): RunDataArray {
    return this.reps.runDataArrayReplicant;
  }

  get runDataActiveRunReplicant(): RunDataActiveRun {
    return this.reps.runDataActiveRunReplicant;
  }

  get timerReplicant(): Timer {
    return this.reps.timerReplicant;
  }

  get activeTweetReplicant(): ActiveTweet {
    return this.reps.activeTweetReplicant;
  }

  get displaySoundReplicant(): DisplaySound {
    return this.reps.displaySoundReplicant;
  }

  get gameLayoutBgAssets(): Assets {
    return this.reps.gameLayoutBgAssetsReplicant;
  }

  get logoAssets(): Assets {
    return this.reps.logoAssetsReplicant;
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, GameLayoutModule },
});
export default store;
export const storeModule = getModule(GameLayoutModule, store);
