// Jacqueline LaFontaine
// SBA 308: Javascript Fundamentals 

// ***************************************************************************

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {// assignments[0]
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {// assignments[1]
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {// assignments[2]
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {// submissions[0]
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {// submissions[1]
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {// submissions[2]
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {// submissions[3]
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {// submissions[4]
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


function getLearnerData(course, ag, submissions) {

    // ***************************************************************************
    // Testing value retrieval with a template literal to make sure I understand the 'layers' of the arrays, objects and their keys respectively. 
    // console.log(`Learner ${submissions[0].learner_id} submitted the assignment ${submissions[0].assignment_id} on ${submissions[0].submission.submitted_at} and received a score of ${submissions[0].submission.score} out of a possible ${ag.assignments[0].points_possible}.`)

  /*
    course --------> CourseInfo
    ag --------> AssignmentGroup
    submissions --------> LearnerSubmissions
  */

            // setting up my array to push objects into 
        const expectedResult = []; 
        // keeping this here just in case I need an empty object for testing
        // can use this to push into the results array that I'll need at the end?
        const pocket = {};

            // initializing some variables for later and using 'let' since they'll need to be redefinable
    let avg = 0;        
    let avg1 = 0;
    let avg2 = 0;

    // ***************************************************************************
    // using a ternary operator here to check if the course IDs match across objects
    // ternary since it's a simple true/false question
    // will update this later as I just focus on getting the results to look the same as the example version

    // course.id == ag.course_id ? console.log("The course IDs are a match for both the course and the assignment.") : console.log("The course IDs do not match.");
    if ( course.id !== ag.course_id) {
      return [];
    }

    // going to save this for the assignment that isn't due yet so stashing here for now
    const currentDate = new Date();
    // console.log(currentDate);
    
    // ***************************************************************************
    // I know I need to loop through the submissions in order to retrive the learner's IDs.

    const arrayOfLearnerIDs = []; // setting up an empty array to hold the learner IDs

    for (let i =0; i < submissions.length; i++) {
    const grabID = submissions[i].learner_id // targeting the learner ID number
    
    // I am pushing the learner_id from the object of LearnerSubmissions
    // into the empty array I defined earlier

    // want to account for duplications while I am looping so it doesn't push
    // multiple values into my arrayOfLearnerIDs

    /*
    .includes() checks an element inside a given array to see if it exists 
    SO !learnerByID.includes(grabID) is basically checking if the value is NOT
    in the empty array. If it's not there, it is pushed to the array. 

    It skips over the duplicate entries because it only pushes the value if it 
    ISN'T there. Else if it is already there, it does not push.
    */
    if (!arrayOfLearnerIDs.includes(grabID)) {
        arrayOfLearnerIDs.push(grabID);
        
    }
   // !arrayOfLearnerIDs.includes(grabID) ? arrayOfLearnerIDs.push(grabID) : false;
}
   console.log(arrayOfLearnerIDs); // [125, 132] 

   // please don't ask, trying to figure something out here
  //  if (expectedResult.isArray()) {
  //   for (i = 0; i < arrayOfLearnerIDs.length; i++) {
  //     arrayOfLearnerIDs = arrayOfLearnerIDs[i];
  //     expectedResult.push(pocket["id"] = arrayOfLearnerIDs); 
  //   }
  //  }

  //  console.log(expectedResult);


  // ***************************************************************************
// putting this function in comment jail until I figure out exactly what 
// I 🤡 was trying to do and what's wrong with it
// alright taking this function out of jail for second and gonna try again
// never mind back in jail again, not gonna let it make me crash out 

// function getAssignment(submission) {
//   let assignment;

//   for (let i = 0; i < submissions.length; i++) {
//     console.log(submissions[i]); 
//   }

//       for (let i = 0; i < ag.assignments.length; i++) {
        
//        if (submission.assignment_id === ag.assignments[i].id ) {
//           assignment = ag.assignments[i];
//        }

//     };
//     return assignment;
//   };

//   console.log(getAssignment());


    // ***************************************************************************
      // In this loop I will be going through the assignments by their IDs and putting 
  // them into an object since I'll need their ID to average the learner's score (in submissions) against 
  // the total points possible (in assignments / ag).
  // assignmentByID acts as a drawer that points to 1, 2, 3 folders that hold the info for each assignment inside.

  const assignmentByID = {};

    for (let i = 0; i < ag.assignments.length; i++) {
      const assignment = ag.assignments[i];
      // console.log(assignment.id); // key for each corresponding assignment object
      // pushing the ID of each assignmnet as a key to my assignmentByID object
      // targets object[key] = the assignments get added to the assignmentByID{} as the for loop loops
      // through the original AssignmentGroup object aka ag.assignments[0], [1], etc.
      assignmentByID[assignment.id] = assignment;

      
    }

    console.log(assignmentByID);
    console.log(assignmentByID["3"].points_possible); // testing value retrieval
  

    // ***************************************************************************
    // In this loop, I am grabbing only the submissions but I will need to match the assignmnets number to the corresponding number inside each submission object
    // ie. if else statement to check if ag.assignments[0].id === submissions[0].assignment_id? 
      console.log(ag.assignments[0].id, 
        submissions[0].assignment_id); // 1 1

    // function getAssignments() {

    // }

    // console.log(submissions[0].submission.score); // 47


    // ✨ THE BIG MAIN SUPER LOOP FOR CHECKING THINGS VIA SUBMISSIONS ✨
    for (let i = 0; i < submissions.length; i++) {
        // TESTING GROUND for INSIDE the loop: 
       // console.log(submissions[i].submissions); // undefined

       // const submission = submissions[i]; // grabbing all submitted assignment objects & storing them in a variable
       //console.log(submissions[i]); 
        // new variable to check assignments stashed in my assignmentByID object
                                // loop through submissions to match their IDs through every iteration of i
       const thisAssignment = assignmentByID[submissions[i].assignment_id];
       console.log(thisAssignment); 

       // now that I know it's logging out the submitted assignmnets, I need to check the assignmnet that isn't due yet
        if (thisAssignment) {
          // where ever 'thisAssignment' is currenlty iterated if it matches/if it exists
          // 'cos otherwise if it doesn't exist then my thisAssignment variable becomes undefined
          // because the loop was unable to match? 
          // so basically this if statement is just checking to see if the 'file or folder' or whatever analogy I'm using at this point - is there.
          
          // now if the assignment exists, I need to check the date because I don't want the 125 terminator
          // submitting an assignment from the future, thanks. 
          // so we set up a variable for date which I tested how it works in scrap-paper.js
          const dueDate = new Date(thisAssignment.due_at); 
// -------------------------------------------- (getting lost in my if statements so separating them)
          // console.log(dueDate); // verifying its retrieving the dates for each submission correctly
              // if due date is NOT greater than currentDate ie. only focus and grade the work if it is ACTUALLY due
            if (!(dueDate > currentDate)) {
              let score = 0;
              // initializing to 0 because if a submission isn't due yet, you don't get points until AFTER it is due
              // also to initialize for adding the points or rather score later into the results
              // so better to start from 0 for the += operator to work from that point

              // if the submissions object exists inside of LearnerSubmissions 
              if (submissions[i].submission) {
                // now I bring in score because this only procs if the submission exists
                // starting from zero and slotting in the score
                score = submissions[i].submission.score; // need the integer value of what the learner earned in order to be able to calculate the averages
              }
// -------------------------------------------- (getting lost in my if statements so separating them)
              // now that I've established the submission exists and that the score varible is grabbing the score
              // setting up for computing averages bc I still need to link to the learners 
              // otherwise its not gonna print out propertly at the end
              // ie. i'm not matching the averages to the learners
              let submittedAvg = score / thisAssignment.points_possible; 
              console.log(score); // 0 - right I set it to that I forgot

              // since I am still looping in submissions, I want to grab the learner ID even if I don't know how I'm 
              // going to link them yet but I know I need them from the submitted assignments
              // so now where ever I am at in the loop, I am targeting that learner's ID number aka 125 or 132
              let studentID = submissions[i].learner_id;

              // things I still need: object of learner data to push into the results array 
              // maybe I can make the object first? Like an empty folder? 
              // maybe something like expectedResults.push({}) ???
              // WAIT - I can use variables for object keys 
              // so can I make 'files' as it is looping or I should say key:value pairs
              // so as it loops I can build a file on each learner? Or the for loops is doing that 

              /* Sequence should be as follows: 
                  1. if statement - due date check
                  2. grab the score from the submission
                  3. calculate the GPA for that particular assignment 
                  4. grab the learner ID and use the studentID variable to make a 'file' label so it'd be like Object[studentID]

                  so like in the array I made I can use the logical NOT ! operator again and push the info as it loops
                  whichhhhh means I need another if statement 
              */
// -------------------------------------------- (getting lost in my if statements so separating them)
              if(!pocket[studentID]) {
                // build the file in here if it does NOT already exist
                // so using the object[id here] = "value here" method to create an object
                // pocket[studentID] = {
                //   "testing something for now": 1289739823 // added a semi-colon here oops
                // }
                // just leaving this here so now I need to build a file for the info I want

                // since this is a new object, I can set the key values to whatever I want  
                pocket[studentID] = {
                  totalEarned: 0,
                  pointsPossible: 0, 
                  // avgForAssignment: 0 // I need three calculations total so maybe another object??? To hold the calculations???? Can use dot notation to grab values (ie. ag.assignments.id)
                  averages: {}
                };

                console.log(pocket); // is logging out the 'empty files' still so that's a relief
              };
// -------------------------------------------- (getting lost in my if statements so separating them)
              // Now I need to start adding the stuff to the student files in HERE using the variables I made
              // into the pocket object as the program loops through the submissions info
              // I regret the amount of if statements I made but it's too late to go back now so I'm committing to the bit (git)!!


              // INSIDE OF DUE DATE IF STATEMENT
              // inside the file, get the student ID and label the file and get the points they earned and THEN add it to the score var
              pocket[studentID].totalEarned = pocket[studentID].totalEarned + score; 
                                                        // grab the assignment var from before and grab the .points_possible value
              pocket[studentID].pointsPossible = pocket[studentID].pointsPossible + thisAssignment.points_possible;
              pocket[studentID].averages[thisAssignment.id] = submittedAvg;
              // console.log(thisAssignment.points_possible); // 150
              
              console.log(pocket); // not logging out correctly ???
              // fixed: on lines 257 to 260 i was using a plural submissions instead of just submission 🤡
              // stil not 100% the correct numbers but will try to fix later, just focus on pushing to a final results form

            }

        }
        // if (i + 1 === submissions.length) {

        // }


    //         if (!expectedResult.includes(submission.learner_id)) {
    //     expectedResult.push([submission.learner_id] = "125");
    // }

    } // end of super huge submissions for loop ***************************

    // ***************************************************************************
    /*
    Objectives: 
    1. Start creating results (can use my arrayOfLearnerIDs) for the ID part
    2. Calculate and build averages
    3. Start building out the object as shown in the example for the array
    4. Need to pull from pocket to link to learner ID? 
    */

    // To clarify: two loops, first one loops through each learner ID and the second loop grabs every assignment for that student

  for (let i = 0; i < arrayOfLearnerIDs.length; i++) {
    // variable localized to this code block so I can use the same name
    const studentID = arrayOfLearnerIDs[i];
    // console.log(studentID); // 125, 132

    // need to grab the info from the pocket object
    const info = pocket[studentID];
    console.log(info); // still not logging the correct info but will try to fix later, just trying to establish structure first
    // wait nvm I haven't computed their avgs yet 

    avg = 0; 

    // procs because all the students earned points on their current assignments
    if (info.pointsPossible > 0) {
      avg = info.totalEarned / info.pointsPossible;
    }

    // can now add their avg and studentID as an object or at least start to build something I can push to the results array
    // did something like this in the previous assignment
    const row = { 
      id: studentID, // getting value from my arrayOfLearnerIDs
      avg: avg // the only straight forward part of my code aka their GPA
    }

    // need to add per assignment scores/averages as well
    // so INNER loop (i'm afraid) that goes through the actual assignments requirements
    for (let j = 0; j < ag.assignments.length; j++) {
      // variable grabs the ID of each assignment as it 
      const currentAssignmentID = ag.assignments[j].id; 
      // console.log(currentAssignmentID); // correctly targets ID number per assignment

        // if the value of the averages exist
      if (info.averages[currentAssignmentID]) {
        // console.log(info.averages[currentAssignmentID]); // 0.94 & 1 so it's grabbing the numbers bc they do exist
        // object[variable] = the average
        // this should build out the assignment ID and its specifc calculated average
        row[currentAssignmentID] = info.averages[currentAssignmentID];
      }

    }



  }  
    


    console.log(expectedResult);


// here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
