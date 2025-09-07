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
    // if (!learnerByID.includes(grabID)) {
    //     learnerByID.push(grabID);
    // }
    !arrayOfLearnerIDs.includes(grabID) ? arrayOfLearnerIDs.push(grabID) : false;
}
    console.log(arrayOfLearnerIDs); // [125, 132] 

    // ***************************************************************************
    // In this loop, I am grabbing only the submissions but I will need to match the assignmnets number to the corresponding number inside each submission object
    // ie. if else statement to check if ag.assignments[0].id === submissions[0].assignment_id? 
      console.log(ag.assignments[0].id, submissions[0].assignment_id); // 1 1

    for (let i = 0; i < submissions.length; i++) {
        const singleSubmission = submissions[i]; // grabbing all submitted assignment objects & storing them in a variable
        console.log(singleSubmission); 

    }

  // ***************************************************************************
  // In this loop I will be going through the assignments by their IDs and putting 
  // them into an object since I'll need their ID to average the learner's score (in submissions) against 
  // the total points possible (in assignments / ag).
  // assignmentByID acts as a drawer that points to 1, 2, 3 folders that hold the info for each assignment inside.
  const assignmentByID = {};
    for (let i = 0; i < ag.assignments.length; i++) {
      const assignment = ag.assignments[i];
      console.log(assignment.id); // key for each corresponding assignment object
      // pushing the ID of each assignmnet as a key to my assignmentByID object
      // targets object[key] = the assignments get added to the assignmentByID{} as the for loop loops
      // through the original AssignmentGroup object aka ag.assignments[0], [1], etc.
      assignmentByID[assignment.id] = assignment;
      
    }
    console.log(assignmentByID);
  

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
