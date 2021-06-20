<template>
  <form @input="igniteFormData">
    <h2>Name Info</h2>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        v-model="firstName"
        type="text"
        class="form-control"
        placeholder="Enter First Name"
      >
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        v-model="lastName"
        type="text"
        class="form-control"
        placeholder="Enter Last Name"
      >
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { FormData } from '@/views/MultiStep/form'

type FormName = Pick<FormData, 'firstName' | 'lastName'>

@Component
export default class extends Vue {
  firstName = ''
  lastName = ''

  @Prop()
  formData!: FormName

  created (): void {
    this.firstName = this.formData.firstName
    this.lastName = this.formData.lastName
  }

  @Emit()
  emitFormData (formData: FormName): void {
    // emit with value
  }

  igniteFormData (): void {
    this.emitFormData({ firstName: this.firstName, lastName: this.lastName })
  }
}
</script>

<style lang="scss" scoped>

</style>
