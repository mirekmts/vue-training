<template>
  <div id="app">
        <h2>{{ title }}</h2>
        <form @submit.prevent="addItem">
            <input
                name="productName"
                v-model="newItem.name" 
                type="text"
                placeholder="add shopping list name"
                v-validate="'required'"
            >
            <div v-show="errors.has('productName')">
                {{ errors.first('productName') }}
            </div>
            <input
                name="productQty"
                v-model="newItem.qty" 
                type="text"
                placeholder="add qty "
                v-validate="{ required: true, numeric: true }"
            >
            <div v-show="errors.has('productQty')">
                {{ errors.first('productQty') }}
            </div>
            <button type="submit">Add task</button>
        </form>
        <ul>
            <li v-for="(item, key) in list" v-bind:key="item.id">{{ item.name }}, {{ item.qty }}   <button @click="removeItem(key)">Remove</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'What you need to buy',
            newItem: {
                name: '',
            },
            list: [],
        }
    },
    methods: {
        addItem() {
            this.$validator.validateAll().then(result => {
                const text = this.newItem.name.trim();
                const isNumber = Number.isInteger(this.newItem.qty)
                if (text && isNumber) {
                    this.list.push({
                        id: this.list.length,
                        ...this.newItem,
                    });
                    this.newItem = {
                        name: '',
                    };
                    this.$validator.reset();
                }
            });
        },
        removeItem(id) {
            this.list.splice(id, 1);
        },
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}
</style>
