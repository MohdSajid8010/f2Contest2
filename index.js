let user_arr = [
    { id: 1, name: "john", age: 18, profession: "developer" },
    { id: 2, name: "jack", age: 20, profession: "developer" },
    { id: 3, name: "karen", age: 19, profession: "admin" }
]

let fliter_btnEl = document.getElementById("fliter-btn");

let seclectEl = document.getElementById("professionInp");
fliter_btnEl.addEventListener("click", () => {
    // console.log(seclectEl ,seclectEl.value)
    let filter_arr = [];
    if (seclectEl.value == "") {
        alert("please select profession")
    } else {

        let filter_arr = user_arr.filter((obj, i) => {
            if (obj.profession === seclectEl.value) {
                return true;
            }
            return false;
        })


        showUser(filter_arr);

    }
});


let data_containerEl = document.getElementsByClassName("data-container")[0];

function showUser(u_arr) {
    data_containerEl.innerHTML = "";
    u_arr.forEach((obj, i) => {
        data_containerEl.innerHTML += `   <div class="data" id="${i}">
<div>id: <span>${i + 1}</span></div>
<div>Name: <span>${obj.name}</span></div>
<div>Profession: <span>${obj.profession}</span></div>
<div>Age: <span>${obj.age}</span></div>
  </div>`
    })
}


let nameEl = document.getElementById("name");
let ProfessionEl = document.getElementById("Profession");
let ageEl = document.getElementById("age");


function addNewUser(e) {
    e.preventDefault();
    // if (nameEl.value === "" || ProfessionEl.value === "" || ageEl.value === "") {
    //     alert("all field is mandatory");
    //     return;
    // }

    // console.log( e,e.target,)
    user_arr.push({
        name: nameEl.value,
        profession: ProfessionEl.value,
        age: ageEl.value
    })

    resetInp();
    showUser(user_arr);
}

let form_clEl = document.getElementsByClassName("form-cl")[0];
form_clEl.addEventListener("submit", addNewUser);

function resetInp(){
     nameEl.value=="",
     ProfessionEl.value=="",
     ageEl.value==""
}
