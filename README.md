# Moana

Check out the live app here: [Live Link](https://moana-asana-fullstack-clone.herokuapp.com/#/)

## Introduction

Moana is a full stack clone of the popular project management tool Asana. Asana allows users to join and create teams, join and create projects, as well as create and assign tasks. One of Asana's strengths is that it allows for precise customization in terms of how one likes to view and organize tasks, and communicate with team members. Asana, like many similar project management softwares, allows the user to read tasks in a list, board, calendar format based on what the user prioritizes (due dates, category, etc). 

### Technologies Used
- **Languages**: Javascript, Ruby, HTML5, CSS
- **Front-end**: React-Redux, React-Beautiful-DnD
- **Back-end**: Rails
- **Database**: PostgreSQL
- **Hosting**: Heroku

## Splash Page

The splash page has general information about Moana and options to sign up, log in, or demo the application. 

### When logged out

Users will be redirected to the sign up page. They can choose to create an account or go back to home and log in/demo the app.

## When logged in

Users will land at the home page upon a successful sign in. The home page has an organized view of unfinished tasks that are assign to the user, their current projects, as well as people they frequently work with. The default setting is to have the sidebar displayed, but this can be toggled using the hamburger icon. 

## Teams

Everything begins with a team. Users will have the option to add teams in the sidebar. Upon the creation of a team, users can then add people to teams by clicking the "Add User" icon. The dropdown by the team name will allow users to edit team details or delete the team. The teams overview will be the main way to create new projects within a team.

## Projects

Upon clicking the "New Project" icon in the teams overview page, the user will be given the option to create a project that is public or private. All users will be able to see projects in their sidebar (regardless of whether or not it is private), but not only users who are within the project will have access to it. Projects can be accessed via the home page, team overview page, or the sidebar. The project comes with three views that the user can choose to view tasks in.

- ### List View

- ### Board View

- ### Overview