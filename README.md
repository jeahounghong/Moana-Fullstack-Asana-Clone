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

![Zooming into a state](/app/assets/images/splash.png)
<p align="center">Moana splash page<p>

### When logged out

Users will be redirected to the sign up page. They can choose to create an account or go back to home and log in/demo the app.

## When logged in

Users will land at the home page upon a successful sign in. The home page has an organized view of unfinished tasks that are assign to the user, their current projects, as well as people they frequently work with. The default setting is to have the sidebar displayed, but this can be toggled using the hamburger icon. 

## Teams

Everything begins with a team. Users will have the option to add teams in the sidebar. Upon the creation of a team, users can then add people to teams by clicking the "Add User" icon. The dropdown by the team name will allow users to edit team details or delete the team. The teams overview will be the main way to create new projects within a team.

![Zooming into a state](/app/assets/images/teams.png)
<p align="center">Team's overview page<p>

## Projects

Upon clicking the "New Project" icon in the teams overview page, the user will be given the option to create a project that is public or private. All users will be able to see projects in their sidebar (regardless of whether or not it is private), but not only users who are within the project will have access to it. Projects can be accessed via the home page, team overview page, or the sidebar. The project comes with three views that the user can choose to view tasks in.

- ### List View
    - The list view is the straightforward vertical organization of tasks. The first section will always be a To Do section dedicated towards tasks for the project. The user can add new sections by toggling the add section button and typing in a new section title. Upon pressing Enter, the section should now present itself within the list view. Users can edit or delete a task by clicking on the section title itself and either editing the title or deleting it entirely. 

![Zooming into a state](/app/assets/images/project_list.png)
<p align="center">Project's list page<p>

- ### Board View
    - The board view is an implementation of multiple column React Beautiful Drag-And-Drop and displays tasks represented as cards in seection columns. The cards can be dragged and relocated to switch a task from one section to another. 

![Zooming into a state](/app/assets/images/project_board.png)
<p align="center">Project's board page<p>

- ### Overview
    - The overview page is analogous to the team overview page in that it allows users to add users specifically to the project, see the project tasks, and edit the description. 

![Zooming into a state](/app/assets/images/projects.png)
<p align="center">Project's overview page<p>

## Tasks

Upon clicking a task on any of the views provided, the task sidebar will appear on the left. This display allows users to edit the task title, assign users within the project, as well as assign due dates. Tasks also have the option of adding subtasks, which have identical functionality. Soon, tasks will have the option of leaving comments, attaching files, and setting custom filters such as priority, topic, etc. 

![Zooming into a state](/app/assets/images/task_show.png)
<p align="center">Task show modal<p>

## My Tasks

The "My Tasks" sidebar icon takes the user to page where all of the tasks assigned to them can be found. The user is then able to make and persist changes to said projects on the page. 

![Zooming into a state](/app/assets/images/my_tasks.png)
<p align="center">My Tasks Page<p>

## Future Features

- Moana will have future updates to include comments, file attachment, comment and task likes, notifications, email verification for sign ups. 
