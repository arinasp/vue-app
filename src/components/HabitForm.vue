<script setup>
import { reactive, computed, ref, watch} from 'vue';


const habit =reactive({});

const sum=computed(()=> habit.count*habit.frequency);
const label=ref();

watch(()=> {{habit.name, habit.description}}, (newVal)=>{
    console.log
    label.value='${habit.name} ${newVal.description}'
}, {deep:true, immediate:true})
</script>
<template>
    <div class="container">
        <form>
            <h1>Трекер привычек</h1>
            {{ label }}
            <div>
                <label for="habit-name">Название привычек</label>
                <input  v.model.number="habit.name" id="habit-name"></input></div>
            <div>
                <label for="description">Описание привычек</label>
                <textarea v.model.number="habit.description" id="description" required></textarea></div>
            <div>
                <label for="frequency">Частота выполнения</label>
                <select v.model.number="habit.frequency" id="frequency">
                    <option value="1">Каждый день</option>
                    <option value="7">Раз в неделю</option>
                    <option value="30">раз в месяц</option>
                </select>
            </div>
            <div>
                <label for="count">Количество повторений</label>
                <input v.model.number="habit.count" id="count" type="number"></input>
            </div>
            <div>Общее количество выполнений <span id="sum"></span>
            </div>
            <button type="submit">Сохранить</button>
            <button type="submit">Простое нажатие</button>
        </form>
    </div>
</template>