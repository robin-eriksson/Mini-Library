<template>
<div 
    v-bind:class="['book', {large}]"
    v-bind:style="{background: `radial-gradient(circle at 0% 0%, #FFF, ${book.color})`, color: color}"
>
    <span class="fold">
        <p class="title">{{book.title}}</p>
        <p class="author">{{book.author}}</p>
    </span>
</div>
</template>
<script>
export default {
    props:{
        book: Object,
        large: Boolean,
        color: {
            type: String,
            default: 'white'
        }
    }
}
</script>

<style lang="scss">
.book{
    margin: 0.5rem 1rem;
    width: 15rem;
    height: 20rem;
    box-sizing: border-box;
    padding-left: 1rem;

    
    .fold{
        border-left: 3px solid rgba(0,0,0,0.15);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem;
        box-sizing: border-box;
    }
    .title{
        font-weight: bolder;
        font-size: 1.2rem;
    }

    &.large{
        width: 23rem;
        height: 33rem;
        padding-left: 2rem;

        .title{
            font-size: 2rem;
            font-weight: 900;
            margin-bottom: 1rem;
        }
        .author{
            font-size: 1.5rem;
        }
    }
}
p, a{
    text-decoration: none !important;
    margin: 0;
    padding: 0;
}

</style>