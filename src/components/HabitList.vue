<script setup>
import { reactive, ref } from 'vue';
import HabitListItem from './HabitListItem.vue';

const habitList = reactive([
  {
    name: 'Бег',
    description: 'Бег в 7:00',
    frequency: 1,
    count: 365,
  }
]);

const newhabitList = reactive([
  {
    name: 'Бег',
    description: 'Бег в 18:00',
    frequency: 1,
    count: 365,
  }
]);

// const fetchHabits=asyns()=>{
//   try{
//     const response=await fetch ('/habit');
//     const json =await response.json();
//     habitList.length=0;
//     if(
//       (Array.isArray(json)){
//         habitList.push(...json)
//       }
//     )
//   }
// }

const allHabits = reactive([...habitList, ...newhabitList]);

const deleteHandler = (idx) => {
  allHabits.splice(idx, 1);
};


</script>




<template>
  <div class="habit-wrapper">
    <ul class="habit-list">
      <HabitListItem v-for="(item, idx) in allHabits" 
      :item="item"
      :key="idx"
      @click="$emit('select:habit', item)"
      class="list-item">
        <template #action>
          <button @click.stop="deleteHandler(idx)">Удалить</button>
        </template>
      </HabitListItem>
    </ul>
  </div>
</template>


<style scoped>
.habit-wrapper {
  position: absolute;
  right: 20rem;
  top: 10rem;
  max-width: 350px;
  width: 100%;
}

.habit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
}

.habit-list li {
  background-color: var(--form-bg, #ffffff);
  border: 1px solid #d4c8f5;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s ease;
}

.habit-list li:hover {
  transform: translateY(-2px);
}

.habit-list div {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--accent, #0d72ad);
}

.habit-list p {
  margin: 0;
  font-size: 0.95em;
  color: #555;
}

.habit-list button {
  margin-top: 0.75rem;
  align-self: center; 
  background-color: var(--button-bg, #0d60ad);
  color: #fff;
  padding: 0.5em 1.2em;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.habit-list button:hover {
  background-color: var(--button-hover, #033b85);
}

@media (max-width: 768px) {
  .habit-wrapper {
    position: static;
    margin-top: 2rem;
  }

  .habit-list li {
    padding: 1rem;
  }
}
</style>