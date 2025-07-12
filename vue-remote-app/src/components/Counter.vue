<script lang="ts">
export default {
    name:"Counter",
    props : ["label"],
    data() {
        return {
            counter: 0
        }
    },
    watch : {
        counter(newVal){
            if(newVal<0){
                this.counter=0;
            }
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
}
</script>

<template>
    <div class="vue-counter">
        <h4>Simple Vue Counter {{ label }}</h4>
        <button @click="increment">+</button>
        <span>{{ counter }}</span>
        <button @click="decrement">-</button>
    </div>
</template>
<style lang="css" scoped>
.vue-counter span{
    display: inline-block;
    min-width: 18px;
    margin: 0px 10px 0px 10px;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #3b9f43;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>