<template>
  <div id="app">
        <h2>{{ title }}</h2>
        <!-- <input v-model="newItem" @keyup.enter="addItem" placeholder="add shopping list item" type="text">
        <button @click="addItem">Add product</button> -->
        <ul>
            <li v-for="(item, key) in list" v-bind:key="item.id">{{ item.name }}   <button @click="removeItem(key)">Remove</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'What you need to buy',
            newItem: '',
            list: [{
                id: 0,
                name: 'Milk',
            }, {
                id: 1,
                name: 'Potato',
            }],
        }
    },
    methods: {
        // addItem() {
        //     const text = this.newItem.trim();

        //     if (text) {
        //         this.list.push({
        //             id: this.list.length,
        //             name: text,
        //         });
        //         this.newItem = '';
        //     }
        // },
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
</style>
