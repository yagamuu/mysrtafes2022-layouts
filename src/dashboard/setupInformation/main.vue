<template>
  <v-app>
    <transition name="view-transition">
      <information-creation-form v-if="isCreation" />
      <information-modification-form v-else-if="isModification" />
      <div v-else>
        <v-btn
          class="my-2"
          block
          color="success"
          @click="openCreationForm"
        >
          Add Information
        </v-btn>
        <div :style="{height: '480px',overflowY: 'scroll'}">
          <information-list/>
        </div>
      </div>
    </transition>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { storeModule, transitionStatus } from './store';
import InformationCreationForm from './compornents/InformationCreationForm.vue';
import InformationModificationForm from './compornents/InformationModificationForm.vue';
import InformationList from './compornents/InformationList.vue';

@Component({
  components: {
    InformationCreationForm,
    InformationModificationForm,
    InformationList,
  },
})
export default class extends Vue {
  get isCreation(): boolean {
    return storeModule.transition === transitionStatus.creation;
  }

  get isModification(): boolean {
    return storeModule.transition === transitionStatus.modification;
  }

  openCreationForm(): void {
    storeModule.transitionToCreation();
  }
}
</script>

<style scoped>
  .view-transition-enter-active {
    transition: all .5s;
  }
  .view-transition-enter, .view-transition-leave {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
