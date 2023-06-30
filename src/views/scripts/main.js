var modalCreate = document.getElementById("create-bike-modal");
var modalEdit = document.getElementById("edit-bike-modal");
var modalDelete = document.getElementById("delete-bike-modal");

window.onclick = function (event) {
    if (event.target == modalCreate) {
        modalCreate.style.display = "none";
    }
};

function modalHide() {
    modalCreate.style.display = "none";
    modalEdit.style.display = "none";
    modalDelete.style.display = "none";
}

function modalShow(option) {
    switch (option) {
        case "create":
            modalCreate.style.display = "block";
            break;
        case "edit":
            modalEdit.style.display = "block";
            break;
        case "delete":
            modalDelete.style.display = "block";
            break;
    }
}
