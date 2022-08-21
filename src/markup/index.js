export function renderTask(tasks) {
    return tasks.map(({ inputVal, isChecked, id }) => {
        return `<li class="item ${isChecked ? "checked" : ""}" data-id="${id}">
        <p class="text">${inputVal}</p>
        <button class="button" type="button">
          x
        </button>
      </li>`;
    }).join("")
}



    //   <li class="item checked" data-id="1659854660464">
    //     <p class="text">Купити хліба</p>
    //     <button class="button" type="button">
    //       x
    //     </button> 
    //   </li>;