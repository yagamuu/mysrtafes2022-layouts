import { ReplicantModule } from '@mysrtafes2022-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule, Action } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  // Helper getter to return all replicants.
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get runDataActiveRun() {
    return this.reps.runDataActiveRunReplicant;
  }

  get displaySound() {
    return this.reps.displaySoundReplicant;
  }

  @Action
  changeDisplaySound(id: string): void {
    nodecg.sendMessage('changeDisplaySound', { id });
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
