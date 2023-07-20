<template>
    <div id="statement">
      <section>
        <Table />
        <button @click="isModalOpen = true" type="button" class="btn btn-primary" data-bs-toggle="button">Отправить заявку</button>
        <ModalWindow v-if="isModalOpen" @close = "isModalOpen = false"  />
      </section>
    </div>
</template>

<script>
import Table from '@/components/Table.vue'
import ModalWindow from '@/components/ModalWindow.vue';

export default{
  name: "statement",
  components:{
    Table,
    ModalWindow
  },
  data(){
    return{
      isModalOpen: false
    }
  }
}
</script>

<style scoped lang="scss">
.p-2{
  margin-top: 5px;
  margin-left: 75%;
}
</style>
