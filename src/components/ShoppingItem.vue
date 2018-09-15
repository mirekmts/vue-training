<template>
    <li>
        <span>Name: {{ product.name }}</span>
        <span class="margin-left-10">Qty: {{ product.qty }}</span>
        <button class="margin-left-10" @click="removeItem">Remove</button>
    </li>
</template>

<script>
export default {
    name: "ShoppingItem",
    props: {
        product: {
        type: Object
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('remove', id)
        }
    }
};
</script>

<style scoped>
</style>