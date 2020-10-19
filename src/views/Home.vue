<template>
  <div class="home">
    <p v-on:click="inc()">Click me to increase me {{ value }}</p>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  },
  computed: {
    value () {
      return this.$store.state.counter.value
    }
  },

})
export default class Home extends Vue {}
</script>
