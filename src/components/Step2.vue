<template>
  <form @input="igniteFormData">
    <h2>Contact Info</h2>
    <div class="form-group">
      <label for="Email">Email</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        placeholder="Enter email"
      >
    </div>
    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="tel"
        type="text"
        class="form-control"
        placeholder="Enter phone number"
      >
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { FormData } from '@/views/MultiStep/form'

type FormEmailAndTel = Pick<FormData, 'email' | 'tel'>

@Component
export default class extends Vue {
  email = ''
  tel = ''

  @Prop()
  formData!: FormEmailAndTel

  created (): void {
    this.email = this.formData.email
    this.tel = this.formData.tel
  }

  @Emit()
  emitFormData (formData: FormEmailAndTel): void {
    // emit with value
  }

  igniteFormData (): void {
    this.emitFormData({ email: this.email, tel: this.tel })
  }
}
</script>

<style lang="scss" scoped>

</style>
