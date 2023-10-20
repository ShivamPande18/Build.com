import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";


const firebaseConfig = {
  databaseURL: "https://buildai-8f244-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// writeUserData("1234567","shivam","shivam@gmailcom","www.com")

window.addDataToDatabase = function addDataToDatabase(_requirement, _budget, _details){
  set(ref(database, 'customers/' + Date.now().toString(36) + Math.random().toString(36).substr(2)), {
    requirement: _requirement,
    budget: _budget,
    details: _details
  });
  console.log("Added");
}