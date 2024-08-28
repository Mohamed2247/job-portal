// import { auth, database } from "./firebaseConfig.js";
// import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// const jobList = document.getElementById('jobList');

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const userRef = ref(database, 'users/' + user.uid);

//         onValue(userRef, (snapshot) => {
//             const userData = snapshot.val();
//             document.getElementById('username').innerText = userData.email;
//         });

//         // Load jobs
//         function loadJobs() {
//             const jobsRef = ref(database, 'jobs/');
//             onValue(jobsRef, (snapshot) => {
//                 jobList.innerHTML = '';
//                 snapshot.forEach((jobSnapshot) => {
//                     const job = jobSnapshot.val();
//                     const jobCard = `
//                         <div class="col-md-4">
//                             <div class="card mb-4">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${job.jobTitle}</h5>
//                                     <p class="card-text">${job.companyName} - ${job.location}</p>
//                                     <p class="card-text">${job.jobDescription}</p>
//                                     <button class="btn btn-primary apply-btn" data-job-id="${jobSnapshot.key}">Apply Now</button>
//                                 </div>
//                             </div>
//                         </div>`;
//                     jobList.innerHTML += jobCard;
//                 });

//                 document.querySelectorAll('.apply-btn').forEach(button => {
//                     button.addEventListener('click', (e) => {
//                         const jobId = e.target.getAttribute('data-job-id');
//                         alert('Applied to job ID: ' + jobId);
//                         // Add more functionality to save the application in the database
//                     });
//                 });
//             });
//         }

//         loadJobs(); // Initial load

//         // Listen for updates in job postings
//         const jobsRef = ref(database, 'jobs/');
//         onValue(jobsRef, (snapshot) => {
//             loadJobs(); // Refresh job listings
//         });
        
//     } else {
//         window.location.href = 'login.html';
//     }
// });
