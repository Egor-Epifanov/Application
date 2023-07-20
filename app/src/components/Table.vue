<template>
  <div class="b-t">
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
    <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Адрес</th>
          <th scope="col">Тип аварии</th>
          <th scope="col">Приоритет</th>
          <th scope="col">Заявитель</th>
          <th scope="col">Телефон</th>
        </tr>
      </thead>
      <tbody class="th-body">
        <tr v-for="app of dataPage" :key="dataPage.id">
          <th scope="row">{{ app.id }}</th>
          <td>{{ app.adress }}</td>
          <td>{{ app.type }}</td>
          <td>{{ app.priority }}</td>
          <td>{{ app.applicant }}</td>
          <td>{{ app.phone }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  </b-table>
</div>
<div class="pag">
  <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" v-on:click="getPreviosPage()"><a class="page-link" href="#">Предыдущая</a></li>
    <li v-for="page in totalPages()" v-on:click="getDataPage(page)" class="page-item" v-bind:class="isActive(page)"><a class="page-link" href="#">{{page}}</a></li>
    <li class="page-item" v-on:click="getNextPage()"><a class="page-link" href="#">Следующая</a></li>
  </ul>
</nav>
</div>
</template>
  
<script>
import axios from 'axios';

export default{
  name:"table",
  data(){
    return {
      apps:[],
      perPage: 5,
      dataPage:[],
      pageActual: 1
    };
  },
  mounted(){
    this.getDataPage(1);
  },
  methods:{
    totalPages(){
      return Math.ceil(this.apps.length / this.perPage)
    },
    getDataPage(noPage){
      this.pageActual = noPage;
      this.dataPage = [];

      let ini = (noPage * this.perPage) - this.perPage;
      let fin = (noPage * this.perPage);

      this.dataPage = this.apps.slice(ini,fin);
    },
    getPreviosPage(){
      if(this.pageActual > 1){
        this.pageActual--;
      }
      this.getDataPage(this.pageActual);
    },
    getNextPage(){
      if(this.pageActual < this.totalPages()){
        this.pageActual++;
      }
      this.getDataPage(this.pageActual);
    },
    isActive(noPage){
      return noPage == this.pageActual ? 'active':'';
    },
  },
  async created(){
    try{
      const res = await axios.get('http://localhost:3000/apps');
      this.apps = res.data;
    }
    catch(e) {
      console.error(e);
    }
  },
  // setup(){
  //     const upAdress = () => {
  //   try {
  //     axios.patch(`${`http://localhost:3000/apps`}/${id}`, {
  //           newAdress: true
  //       });
  //       this.apps = this.app.map(adress => {
  //           if (adress.id === id) {
  //                 adress.newAdress = true;
  //           }
  //           return adress;
  //         });
  //   } catch (error) {
  //     console.error(error);
  // }
  //     }
  // },
}
</script>

<style scoped lang="scss">
.table{
  justify-content: center;
  margin: auto;
}
.th-body{
  justify-content: auto;
  margin: auto;
}

</style>