const app = new Vue({
    el: '#app',
    data: {
        title: 'What you need to buy',
        newItem: '',
        list: [{
            id: 0,
            name: 'Milk',
          }, {
            id: 1,
            name: 'Potato',
        }]
    },
    methods: {
        addItem() {
            const text = this.newItem.trim();

            if (text) {
                this.list.push({
                    id: this.list.length,
                    name: text,
                });
                this.newItem = '';
            }
        },
        removeItem(id) {
            this.list.splice(id, 1);
        }
    }
})