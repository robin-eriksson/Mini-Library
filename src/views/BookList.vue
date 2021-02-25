<template>
<div class="book-list-wrapper">
    <h1>{{books.length}} Classic Childrens books</h1>
    <div class="book-list">
        <router-link 
            v-for="book in books"
            class="book"           
            v-bind:to="'/books/'+book.id"
            v-bind:key="book.id"
        >
            <book v-bind:book="book" />
        </router-link>
    </div>
</div>
</template>
<script>
import Book from '@/components/Book'
export default {
    components: {Book},
    computed: {
        books(){return this.$root.$data.books}
    },
    
    methods: {

    }
}
</script>

<style>
.book-list-wrapper{
    width: 90vw;
    margin: 0 5vw 0 5vw;
}
.book-list{
    display: flex;
    flex-wrap: wrap;
}
h1{
    padding-left: 3rem;
}
</style>