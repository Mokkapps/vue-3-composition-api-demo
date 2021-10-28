<template>
  <div>
    <h2>Counter Composition API</h2>
    <p>Count: {{ count }}</p>
    <p>2^Count: {{ countPow }}</p>
    <button @click="increment()">Increase Count</button>
    <button @click="incrementBy(5)">Increase Count by 5</button>
    <button @click="decrement()">Decrease Count</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, watch } from 'vue';

export default {
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['counter-update'],
  setup(props, context) {
    const count = ref(props.initialValue);

    const increment = () => {
      count.value += 1;
    };
    const decrement = () => {
      count.value -= 1;
    };
    const incrementBy = (value: number) => {
      count.value += value;
    };

    const countPow = computed(() => count.value * count.value);

    watch(count, (value) => {
      context.emit('counter-update', value);
    });

    onMounted(() => console.log('Composition API counter mounted'));

    return {
      count,
      increment,
      decrement,
      incrementBy,
      countPow,
    };
  },
};
</script>
