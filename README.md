# To-Do Lists

For this project, you'll be asked to create a full-stack "To Do List" application using Django + React.

## Release 1: Django Back-End
Your data model design should allow for the following features: 
- A User should be able to create multiple Task Lists. 
- Each List can have many Tasks associated with it. 
- Each Task belongs to one List. 
- Users should be able to create, read, update, and destroy a List. 
- Users should be able to create, read, update, and destroy Tasks on a List. 
- Each Task should have a boolean value for completion. `task.completed = True` 
- Each Task should have a due date. 

## Release 2: React Front End 
Your front-end site should encorporate the following pages:
- Home Page
  - Show a list of all the Task Lists, divided by completed and uncompleted  
  - Ability to create a new Task List
- Task List Page
  - Show all Tasks for the given List, as well as due date and completion status for those Tasks
  - Ability to create a new Task for the current List
  - Ability to update (check-off) a Task
  - Ability to delete a Task

Additionally, you should provide proper navigation and some styling to make this a complete site!


## Release 3: User Authentication
One you have the main features implemented for this project, try to proceed with adding in user authentication functionality. This would include sign-up and login/logout pages on your front-end, and authentication logic in your back-end

Your site should only show the Task Lists (and Tasks) belonging to the signed-in user. 

## Release 4: Additional Features (Stretch Challenge)

### Task Status
- Add the ability to assign various different task statuses (instead of just "completed"), such as "started", "blocked", or "under review"

### Task Priority
- Add the ability to assign a priority to each task, and maybe sort Tasks by priority on the front-end

### Sub-Task List
- Add the ability to have a Task List nested as a Task under another Task List. For example, if one of our tasks was to "bake a cake", we might want to create a sub-task list with some tasks like "wash dishes", "buy flour", and "find new recipe". 
