
<script setup>
import { reactive, computed, ref, watch } from 'vue';

const habit = reactive({
  name: '',
  description: '',
  frequency: 1,
  count: 0
});

const sum = computed(() => habit.value.count * habit.value.frequency);

const label = ref();

watch(
  () => ({ name: habit.value.name, description: habit.value.description }),
  (newVal) => {
    label.value = `${newVal.name} — ${newVal.description}`;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="container">

    <form @submit.prevent>
      <h1>Трекер привычек</h1>
      

      <div>
        <label for="habit-name">Название привычки</label>
        <input v-model="habit.name" id="habit-name" />
      </div>

      <div>
        <label for="description">Описание привычки</label>
        <textarea v-model="habit.description" id="description" required></textarea>
      </div>

      <div>
        <label for="frequency">Частота выполнения</label>
        <select v-model.number="habit.frequency" id="frequency">
          <option value="1">Каждый день</option>
          <option value="7">Раз в неделю</option>
          <option value="30">Раз в месяц</option>
        </select>
      </div>

      <div>
        <label for="count">Количество повторений</label>
        <input v-model.number="habit.count" id="count" type="number" />
      </div>

      <div>
        Общее количество выполнений: <strong>{{ sum }}</strong>
      </div>

      <button type="submit">Сохранить</button>
      <button type="submit">Простое нажатие</button>
    </form>
  </div>
</template>


