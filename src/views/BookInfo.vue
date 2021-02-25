<template>
<div class="book-info">
    <router-link to="/" class="back">←</router-link>
    <book :book="book" color="black" large/>
    <div class="info">
        <h2>{{book.title}}</h2>
        <h3>{{book.author}}</h3>
        <p>{{book.plot}}</p>
        <div class="details">
            <p><strong>Audience:</strong> {{book.audience}}</p>
            <p><strong>First Published:</strong> {{book.year}}</p>
            <p><strong>Pages:</strong> {{book.pages}}</p>
            <p><strong>Publiser:</strong> {{book.publisher}}</p>
        </div>
        <button>pls giv, i want read</button>
        
    </div>
</div>
</template>
<script>
import Book from '@/components/Book'
export default {
    components:{Book},
    computed:{
        book(){
            return this.$root.$data.books.find(book => book.id == this.$route.params.id)
        }
    },
    
    methods: {

    }
}
</script>

<style lang="scss">
.book-info{
    background-color: rgb(50,50,50);
    height: 100vh;
    padding: 2rem 4rem;
    display: grid;
    grid-template-rows: 5rem auto;
    grid-template-columns: 1fr 1fr;

    p,h2,h3{
        color: white;
    }

    .details{
        background-color: rgba(255,255,255,0.1);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 1rem;
        margin: 1rem 0;

    }

    button{
        border: 0;
        outline: 0;
        background-color: white;
        color: black;
        padding: 1rem 2rem;
        font-size: 1rem;
        border-radius: 3px;
        font-weight: 600;
    }
}


.back{
    grid-column: span 2;
    border-radius: 50%;
    background-color: grey;
    font-size: 2rem;
    font-weight: 900;
    width: 50px;
    height: 50px;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>