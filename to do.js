  var tasks = [];   // Array to store tasks

    function addTask() {

      var input = document.getElementById("taskInput");
      var taskValue = input.value;

      // Empty validation
      if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
      }

      tasks.push(taskValue);   // Add to array
      input.value = "";        // Clear input

      displayTasks();          // Update DOM
    }

    function displayTasks() {

      var list = document.getElementById("taskList");
      list.innerHTML = "";   // Clear old list

      for (var i = 0; i < tasks.length; i++) {

        list.innerHTML += 
        "<li onclick='completeTask(this)'>" 
        + tasks[i] + 
        " <button class='deleteBtn' onclick='deleteTask(" + i + ")'>X</button> </li>";
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);  // Remove from array
      displayTasks();          // Refresh list
    }

    function completeTask(element) {
      element.classList.toggle("completed");  // Add/Remove class
    }

    function toggleDark() {
      document.body.classList.toggle("dark");
    }