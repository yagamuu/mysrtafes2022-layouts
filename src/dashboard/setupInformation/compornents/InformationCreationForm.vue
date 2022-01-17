<template>
  <v-app>
    <v-sheet
      color="transparent"
      class="pa-2"
    >
      <div class="text-right">
        <v-btn
          class="mb-4"
          fab
          small
          @click="close"
        >
          <v-icon x-small>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
      <v-form class="my-2" ref="form" v-model="valid">
        <v-textarea
          label="Information"
          filled
          auto-grow
          clearable
          counter
          :rules="rules"
          v-model="text"
        />
        <v-btn
          class="mt-2"
          block
          color="primary"
          @click="createInformation"
          :disabled="!valid"
        >
          Create
        </v-btn>
      </v-form>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { storeModule } from '../store';

@Component
export default class InformationCreationForm extends Vue {
  text = storeModule.text;
  valid = true;

  close(): void {
    storeModule.transitionToInformation();
  }

  createInformation(): void {
    storeModule.createInformation(this.text);
    this.close();
  }

  rules = [
    (v: string):boolean | string => v.length <= 170 || '最大170字まで',
    (v: string):boolean | string => v.length > 0 || '1文字以上入力して下さい',
  ];
}
</script>
