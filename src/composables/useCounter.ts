import { ref, computed, onMounted } from 'vue';

export default function useCounter(initialValue: number) {
  const count = ref(initialValue);

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

  onMounted(() => console.log('useCounter mounted'));

  return {
    count,
    countPow,
    increment,
    decrement,
    incrementBy,
  };
}
