<template>
  <div>
    <h2>Counter Composition API v2</h2>
    <p>Count: {{ count }}</p>
    <p>2^Count: {{ countPow }}</p>
    <button @click="increment()">Increase Count</button>
    <button @click="incrementBy(5)">Increase Count by 5</button>
    <button @click="decrement()">Decrease Count</button>
  </div>
</template>

<script lang="ts">
import { watch } from 'vue';
import useCounter from '../composables/useCounter';

export default {
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['counter-update'],
  setup(props, context) {
    const { count, increment, countPow, decrement, incrementBy } = useCounter(
      props.initialValue
    );

    watch(count, (value) => {
      context.emit('counter-update', value);
    });

    return { count, countPow, increment, decrement, incrementBy };
  },
};
</script>
