<template>
  <div>
    <h2>Counter Composition API v3</h2>
    <p>Count: {{ count }}</p>
    <p>2^Count: {{ countPow }}</p>
    <button @click="increment()">Increase Count</button>
    <button @click="incrementBy(5)">Increase Count by 5</button>
    <button @click="decrement()">Decrease Count</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue';
import useCounter from '../composables/useCounter';

interface Props {
  initialValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 0,
});

const emit = defineEmits(['counter-update']);

const { count, countPow, increment, decrement, incrementBy } = useCounter(
  props.initialValue
);

watch(count, (value) => {
  emit('counter-update', value);
});
</script>
