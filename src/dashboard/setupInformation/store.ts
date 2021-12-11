import { ReplicantModule } from '@mysrtafes2022-layouts/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { SetupInformation } from '@mysrtafes2022-layouts/types/schemas/setupInformation';

Vue.use(Vuex);

export const transitionStatus = {
  informations: 0,
  creation: 1,
  modification: 2,
} as const;

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  transition: number = transitionStatus.informations;
  id : string | null = null;
  text = '';

  // Helper getter to return all replicants.
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get setupInformationArray() {
    return this.reps.setupInformationArrayReplicant;
  }

  @Mutation
  INIT_STATE(): void {
    this.id = null;
    this.text = '';
  }

  @Mutation
  UPDATE_STATE(information: SetupInformation): void {
    this.id = information.id || null;
    this.text = information.text || '';
  }

  @Mutation
  OPEN_CREATION_FORM(): void {
    this.transition = transitionStatus.creation;
  }

  @Mutation
  OPEN_MODIFICATION_FORM(): void {
    this.transition = transitionStatus.modification;
  }

  @Mutation
  CLOSE_FORM(): void {
    this.transition = transitionStatus.informations;
  }

  @Action
  createInformation(text: string): void {
    nodecg.sendMessage('createInformation', { text });
  }

  @Action
  updateInformation(information: SetupInformation): void {
    nodecg.sendMessage('updateInformation', information);
  }

  @Action
  deleteInformation(id: string): void {
    nodecg.sendMessage('deleteInformation', { id });
  }

  @Action
  transitionToCreation(): void {
    this.INIT_STATE();
    this.OPEN_CREATION_FORM();
  }

  @Action
  transitionToModification(information: SetupInformation): void {
    this.UPDATE_STATE(information);
    this.OPEN_MODIFICATION_FORM();
  }

  @Action
  transitionToInformation(): void {
    this.CLOSE_FORM();
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
