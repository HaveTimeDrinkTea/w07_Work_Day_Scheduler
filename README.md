# w07_Work_Day_Scheduler

## Description

This project is part of the Frontend Dev Bootcamp course challenge for the seventh week "Third-Party APIs". 

It requires us to use third-party APIs such as moment.js, JQuery and its UI together JScript objects, client-side storage, browser events to build single day schedule planner. This calendar application should allow a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. We are also expected Moment.js library to work with date and time. 

The MCQ quiz should present the questions to the user. When the user clicks on one of the multiple choice answers, the quiz should check store the results and move on to the next question.  If the user give a wrong answer then the quiz time is to be reduced as a penalty. 

The JScript will produce the output dyanmically to the webpage pages as part of the starter code provided. I've tried to group repeatedly called Jscript codes into modular functions where possible.

***To make it easier to evaluate this application, I have deliberately set the quiz to take only 3 questions from a question bank of 20 and to allow a total of 18 seconds to answer them.*** The application is coded in such a way these parameters can be changed easily.





### Methodology: Pseudo Code
* Get the current (local machine) time to present in Jumbotron and to extract the date (in DD-MMM-YYYY string) and the hour as a numeric variable
  * the date should be inserted with the user entry
  * the hour will be used to colour each time slots to indicate "past", "present" or "future".
* For each time slot (if in the "present" or "future"
  * Allow user to enter text (Check for null entry)
  * Allow user to save their entry
  * present the newly saved or previously saved entries.
* For "past" time slots, user should still be able to see their previously saved entries.  
  

### Further Improvements

* To allow users to input the number of questions to be included in a quiz and / or the amount of time allowed or each question. This can be implemented using FORM and event listeners in the homepage. 
* To set up an even larger bank of questions or categories of questions.
* Add a quit button to quit the quiz at any time.
* Add a Spaced Repetition System learning mechanism to this quiz application. 



## User Story

AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively

[Deployment link](https://havetimedrinktea.github.io/w07_Work_Day_Scheduler/)


## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
* Present timeblocks for standard business hours when the user scrolls down.
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
* Allow a user to enter an event when they click a timeblock
* Save the event in local storage when the save button is clicked in that timeblock.
* Persist events between refreshes of a page



## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)


## Installation

N.A.


## Usage 

Screen dump of the deployed webpage:

### Web Schedule Planner
![Deployed Webpage](assets/images/js_quiz_homepage.png)



### Question Page Demo 1
![Deployed Webpage](assets/images/js_quiz_homepage_questions.png)



### Question Page Demo 2
![Deployed Webpage](assets/images/js_quiz_homepage_questions2.png)



### Quiz End Page
![Deployed Webpage](assets/images/js_quiz_homepage_quiz_end.png)



### Quiz High Scores League Table
![Deployed Webpage](assets/images/js_quiz_homepage_highscore.png)



## Credits

* Most of the inspirational quotes are taken from [https://malpaper.com/blogs/news/72-mindfulness-quotes-for-daily-inspiration](https://malpaper.com/blogs/news/72-mindfulness-quotes-for-daily-inspiration)
* speech bubble css styling modified from [https://projects.verou.me/bubbly/](https://projects.verou.me/bubbly/)



## License 

MIT License



## Features

### Main Features
A style online schedule planner for the current day that
* uses bootstrap v4.6 as a page template
* display the current (local machine) date and time in the jumbotron
* Hourly time slots for scheduling events during office hours. This app allows user to input entries for 13 hourly time slots from 0700h to 1900h.
* Allow users to enter events for the current or future time slots. When the user attempts to save a blank event entry, the is a warning message.
* Once the user saved an entry, it is displayed for the time slot.
* Users can enter more than one event (subject to local storage limits)
* Each hourly timeslot is colour coded to represent "past", "preent" and "future"
* The event data that user entered persists on page refresh.


### Extra Features
* A randam inspirational quote of the day rendered on page refresh from a quotes data bank of 30+ quotes
* Two (or more) post-it notes on the side bar for reminders
* Entry (and rendering) of more than one event for each time slot.
* A button to remove previous day entries to clear up local storage.
* Previous days entries are not presented in the current day schedule.
* Two buttons for testing this app (to be removed after go-live):
  ** Button for creating test data for the app
  ** Button to switch between local machine time and a default time of 12 noon.

