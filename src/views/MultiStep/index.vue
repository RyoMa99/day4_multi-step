<template>
  <div class="row">
    <div class="col-md-8">
      <h1>Step:{{ stepNumber }}</h1>
      <router-view
        :name="String(stepNumber)"
        :form-data="form"
        @emit-form-data="changeFormData"
      />
      <button
        v-if="stepNumber !== 1"
        class="btn btn-primary"
        @click="backStep"
      >
        Back
      </button>
      <button
        v-if="stepNumber !== 3"
        class="btn btn-primary"
        @click="nextStep"
      >
        Next
      </button>

      <h2>値の変更確認用</h2>
      <pre><code>{{ form }}</code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FormData } from './form'

@Component
export default class extends Vue {
  stepNumber = 1
  form: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    birthday: ''
  }

  backStep (): void {
    this.stepNumber--
  }

  nextStep (): void {
    this.stepNumber++
  }

  changeFormData (formData: Partial<FormData>): void {
    Object.assign(this.form, formData)
  }
}
</script>

<style lang="scss" scpoed>

</style>
