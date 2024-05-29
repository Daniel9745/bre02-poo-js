import { Mage } from "./mage.js";
import { Warrior } from "./warrior.js";

window.addEventListener("DOMContentLoaded", function(){
    let mages = new Mage("Daniel", 50, 50);
    let guerrier = new Warrior("Marc", 60, 10);

    console.log(mages);
    console.log(guerrier);
})