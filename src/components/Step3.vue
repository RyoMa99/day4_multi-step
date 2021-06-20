<template>
  <form @input="igniteFormData">
    <h2>User Info</h2>
    <div class="form-group">
      <label for="Birthday">Birthday</label>
      <input
        v-model="birthday"
        type="date"
        class="form-control"
        placeholder="Enter Birthday"
      >
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { FormData } from '@/views/MultiStep/form'

type FormBirthday = Pick<FormData, 'birthday'>

@Component
export default class extends Vue {
  birthday = ''

  @Prop()
  formData!: FormBirthday

  created (): void {
    this.birthday = this.formData.birthday
  }

  @Emit()
  emitFormData (formData: FormBirthday): void {
    // emit with value
  }

  igniteFormData (): void {
    this.emitFormData({ birthday: this.birthday })
  }
}
</script>

<style lang="scss" scoped>

</style>
