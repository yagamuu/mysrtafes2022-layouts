<template>
  <v-app>
    <v-card
      v-for="(information) in setupInformationArray"
      :key="information.id"
      class="mb-2">
        <v-card-text>
          {{information.text}}
        </v-card-text>
        <v-card-actions>
        <v-spacer/>
        <v-btn small @click="openInformationModification(information)">Edit</v-btn>
        <v-btn x-small @click="deleteInformation(information.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SetupInformationArray } from '@mysrtafes2022-layouts/types/schemas/setupInformationArray';
import { SetupInformation } from '@mysrtafes2022-layouts/types/schemas/setupInformation';
import { storeModule } from '../store';

@Component
export default class InformationList extends Vue {
  @Getter readonly setupInformationArray!: SetupInformationArray;

  openInformationModification(information: SetupInformation): void {
    storeModule.transitionToModification(information);
  }

  deleteInformation(id: string): void {
    storeModule.deleteInformation(id);
  }
}
</script>
