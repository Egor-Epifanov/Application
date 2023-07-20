<template>
    <div class="fixed inset-0 z-10 bg-black bg-opacity-80 focus:outline-none" tabindex="-1" @click.self="close" @keydown.esc="close" >
        <div class="bg-white max-w-sm mx-auto my-8">
            <div class="p-2 text-right">
            </div>
            <div class="p-6">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end" data-bs-toggle="button">
                <button class="p-2 btn btn-primary" @click="close" text="Заявка">
                    Закрыть
                </button>
                </div>
                <h3>Форма заявки</h3>
                <form>
                    <label>Адрес:</label>
                    <input type="adress" required v-model="adress" placeholder="г.Ростов-на-Дону, ул. (x), дом (x)">
                    
                    <label>Местоположение:</label>
                    <MiniMapForModal />

                    <label>Тип аварии:</label>
                    <select v-model="type">
                        <option value="Порыв">Порыв</option>
                        <option value="Утечка">Утечка</option>
                        <option value="Колонка уличная">Колонка уличная</option>
                        <option value="Некачественная вода">Некачественная вода</option>
                        <option value="Закупорк">Закупорка</option>
                        <option value="Другое">Другое</option>
                    </select>

                    <label>Приоритет:</label>
                    <select v-model="priority">
                        <option value="Незамедлительно">1 - Незамедлительно</option>
                        <option value="Высокий">2 - Высокий</option>
                        <option value="Средний">3 - Средний</option>
                        <option value="Низкий">4 - Низкий</option>
                    </select>

                    <label>Заявитель:</label>
                    <input type="applicant" required v-model="applicant" placeholder="Фамилия Имя Отчество">

                    <label>Номер телефона:</label>
                    <input type="phone" required v-model="phone" placeholder="+7 (xxx) xxx-xx-xx">
                </form>
                
                <button id="myBtn" @click="addApp()" type="submit" class="p-2 btn btn-secondary" :disabled="!isComplete" >
                    Отправить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MiniMapForModal from '@/components/MiniMapForModal.vue';

export default{
    data(){
        return{
            apps: [],
            mass: [],
            adress:'',
            type:'',
            priority:'',
            applicant:'',
            phone:''
        }
    },
    emits: ['close'],
    mounted(){
        this.$el.focus()
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
    methods:{
        close(){
            this.$emit('close')
        },
        async addApp(){
           const res = await axios.post('http://localhost:3000/apps', {
            adress: this.adress,
            type: this.type,
            priority: this.priority,
            applicant: this.applicant,
            phone: this.phone,
           });
           this.apps = [...this.apps, res.data];
           this.adress = '';
           this.type = '';
           this.priority = '';
           this.applicant = '';
           this.phone = '';
        },
    },
    computed: {
        isComplete () {
            return (
                    this.adress != ''&&
                    this.type != ''&&
                    this.priority != ''&&
                    this.applicant != ''&&
                    this.phone != ''
            )
        }
    },
    components:{
        MiniMapForModal
    }
};
</script>

<style scoped lang="scss">
.fixed{
    position: static;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    display: table;
    margin-left: 25%;
    border-radius: 20%;
}
.bg-white{
    display: table-cell;
    vertical-align: middle;
}
.p-2{
    text-align: right;
    
}
.p-6{
    margin: 0;
    background: #eee;
}
form{
    max-width: 420px;
    margin: 30px auto;
    background: whitesmoke;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: content-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}
#myBtn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>