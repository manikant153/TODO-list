var completeCounter = 0;
var incompleteCounter = 0;
var totalCounter = 0;

function addTask() {
    var input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        var span = document.createElement("span");
        span.innerText = input.value;
        li.appendChild(span);

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            li.remove();
            if (checkbox.checked) {
                completeCounter--;
            } else {
                incompleteCounter--;
            }
            totalCounter--;
            updateCounters();
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        input.value = "";

        totalCounter++;
        incompleteCounter++;
        updateCounters();

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                completeCounter++;
                incompleteCounter--;
            } else {
                completeCounter--;
                incompleteCounter++;
            }
            updateCounters();
        });
    }
}

function updateCounters() {
    document.getElementById("complete").innerText = completeCounter;
    document.getElementById("incomplete").innerText = incompleteCounter;
    document.getElementById("total").innerText = totalCounter;
}

function showSection(section) {
    var counterDiv = document.getElementById("counter");

    switch (section) {
        case 'complete':
            showCounter("complete");
            break;
        case 'incomplete':
            showCounter("incomplete");
            break;
        case 'total':
            showCounter("total");
            break;
        default:
            counterDiv.style.display = "none";
    }
}

function showCounter(counterType) {
    var counterDiv = document.getElementById("counter");
    var counters = {
        'complete': document.getElementById("complete").parentElement,
        'incomplete': document.getElementById("incomplete").parentElement,
        'total': document.getElementById("total").parentElement
    };

    counterDiv.style.display = "block";

    for (var counter in counters) {
        counters[counter].style.display = counter === counterType ? "block" : "none";
    }
}