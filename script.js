const checklistDataAttempter = [
    { text: "Clip Exports and Subgoals have capitalized letters in description box?", hover: "" },
    { text: "Sub-goal type attribute is the same as the verb in the description box?", hover: "" },
    { text: "There are no overlapping annotations? (Subgoal and collector issue)", hover: "" },
    { text: "The task has only one type of layer annotation? (Hand tracking, Subgoal, Clip export, Collector issue) (Excluding auto flags)", hover: "" },
    { text: "Are all the scene Attributes complete?", hover: "" },
    { text: "Are the demonstration attributes correctly annotated in each sub goal?", hover: "" },
    { text: "Use of Prepositions are consistent through the same subgoals?", hover: "" },
    { text: "The demostration has no Video Quality Issues?", hover: "" },
    { text: "There are not empty annotations in the task?", hover: "" },
    { text: "No grammar errors in the task?", hover: "" },
    { text: "There are not PII breach in the demostration?", hover: "" },
    { text: "Do you use the Quality assistant at the end?", hover: "" }
];

const checklistDataReviewer = [
    { text: "Scene Attributes complete?", hover: "" },
    { text: "Clip Exports and Subgoals have capitalized first letter in description box?", hover: "" },
    { text: "Sub-goal type attribute is the same as the first letter in the description box", hover: "" },
    { text: "There are no overlapping annotations? (Except Subgoal and Clip export)", hover: "" },
    { text: "No grammar errors in the task", hover: "" },
    { text: "Use the Quality assistant ", hover: "" },
    { text: "The task has hand tracking errors and are marked correctly", hover: "" },
    { text: "The task has only one type layer annotation (Hand tracking, Subgoal, Clip export, Collector issue) (Not including the auto flags in this case)", hover: "" },
    { text: "Good start in the dead time annotations.", hover: "" },
    { text: "Double check Demonstrations before rejecting a task", hover: "" },
    { text: "Feedback well explained on Audit tracker / on Task", hover: "" },
];

function generateChecklist(containerId, dataSource) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    dataSource.forEach(item => {
        const div = document.createElement("div");
        div.className = "checklist-item";

        const label = document.createElement("span");
        label.textContent = item.text;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.title = item.hover;

        checkbox.addEventListener("change", () => {
            label.classList.toggle("striked", checkbox.checked);
        });

        div.appendChild(label);
        div.appendChild(checkbox);
        container.appendChild(div);
    });
}

function showSection(type) {
    document.getElementById("mainMenu").style.display = "none";

    if (type === "attempter") {
        document.getElementById("attempterSection").style.display = "block";
        document.getElementById("attempterNotes").style.display = "block";
        generateChecklist("attempterChecklist", checklistDataAttempter);
    }
    if (type === "reviewer") {
        document.getElementById("reviewerSection").style.display = "block";
        document.getElementById("attempterNotes").style.display = "none";
        generateChecklist("reviewerChecklist", checklistDataReviewer);
    }
}

function goBack() {
    document.getElementById("mainMenu").style.display = "flex";
    document.getElementById("attempterSection").style.display = "none";
    document.getElementById("reviewerSection").style.display = "none";
    document.getElementById("attempterNotes").style.display = "none";
}

function resetChecklist(containerId) {
    const container = document.getElementById(containerId);
    const checkboxes = container.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(cb => cb.checked = false);

    const section = container.closest(".checklist-section");
    if (section) {
        const infoBoxes = section.querySelectorAll(".info-box");
        infoBoxes.forEach(box => box.innerText = "");
    }

}

