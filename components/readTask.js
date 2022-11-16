import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const readTasks = () =>{
    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);

    dates.forEach(date =>{
        const dateMoment = moment(date, 'DD/MM/YYY');
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYY');
            const diff = dateMoment.diff(taskDate);
            if (diff == 0){
                list.appendChild(createTask(task))
            }
            
        });
    });
}

        