// import { Invoice } from "./classes/Invoice.js";
import { User } from "./classes/User.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// Interfaces
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: isPerson = {
//   name: "shaun",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent ", amount);
//     return amount;
//   },
// };
// const greetPerson = (person: isPerson) => {
//   console.log("hello ", person.name);
// };
// greetPerson(me);
// const invOne = new Invoice("Mario", "Mario Website", 200);
// const invTwo = new Invoice("Black", "Black Website", 200);
// console.log(invOne);
// console.log(invOne.format());
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   // console.log(inv.client, inv.details, inv.amount);
//   console.log(inv.client, inv.amount);
//   console.log(inv.format());
// });
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Invoice("mario", "office work", 10);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.forEach((doc) => {
//   console.log(doc);
// });
var form = document.querySelector(".new-item-form");
var gender = document.querySelector("#gender");
var fullname = document.querySelector("#fullname");
var hobby = document.querySelector("#hobby");
var phone = document.querySelector("#phone");
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
var alert = document.querySelector(".alert");
var text = document.querySelector(".alert>small");
var close = document.querySelector(".alert>.close");
close.addEventListener("click", function () {
    alert.style.display = "none";
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (gender.selectedIndex > 0) {
        var doc = void 0;
        doc = new User(gender.value, hobby.value, phone.valueAsNumber);
        list.render(doc, fullname.value, "end");
        gender.selectedIndex = 0;
        fullname.value = "";
        hobby.value = "";
        phone.value = "";
        alert.classList.remove("error");
        alert.style.display = "block";
        alert.style.border = "1px solid #00ce89";
        alert.classList.add("success");
        text.innerHTML = "<strong>Success!</strong> Data added succesfully!";
    }
    else {
        alert.classList.remove("success");
        alert.style.border = "1px solid #ce003e";
        alert.classList.add("error");
        alert.style.display = "block";
        text.innerHTML = "<strong>Error!</strong> Gender is required!";
    }
});
