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
                class="margin-left-10"
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
            <li v-for="(item, key) in list" v-bind:key="item.id">
                <span>Name: {{ item.name }}</span>
                <span class="margin-left-10">Qty: {{ item.qty }}</span>
                <button class="margin-left-10" @click="removeItem(key)">Remove</button>
            </li>
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
            list: [{
                id: 0,
                name: 'Milk',
                qty: 2,
            },
            {
                id: 1,
                name: 'Coffe',
                qty: 10,
            }],
        }
    },
    methods: {
        addItem() {
            this.$validator.validateAll().then(result => {
                const text = this.newItem.name.trim();
                const qtyToInt = parseInt(this.newItem.qty)
                const isNumber = Number.isInteger(qtyToInt)

                if (text && isNumber) {
                    this.list.push({
                        id: this.list.length,
                        name: text,
                        qty: qtyToInt,
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

.margin-left-10 {
    margin-left: 10px;
}
</style>
