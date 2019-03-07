# Writersbloq Front-End
## Description
This application is designed to provide amateur writers with a platform to write, read, and publish stories. This is a description of the front-end implementation of the application. The front-end is where and how users will interact with information in the database of the application.

## Technologies Used
- Angular
- Bootstrap
- NG-Bootstrap 
- Jasmine 
- Karma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Actions
### Users
People using the application are classified as users. Users can be either anonymous or registered. Anonymous users are only able to use part of the application's functionality. Registered users have access to the full functionality of the appplication.

#### Anonymous Users
> ##### What is an Anonymous User
> Anonymous users are people running the application while not logged into a registered account. When a user starts the application they will always be considered an anonymous user. Users are no longer considered anonymous when they either register a new account or log into an existing account.

> ##### Available Actions
> 1. [Search for story](#search-for-story)
> 2. [Select story](#select-story)
>     - Select Chapter
> 3. [Register Account](#register-account)
> 4. [Account Login](#account-login)

#### Registered Users
> ##### What is a Registered User
> Registered users are people running the application while a registered account is open. Users must log in or register an account in order to be considered a registered user.

> ##### Available Actions
> 1. [Search for story](#search-for-story)
> 2. [Select story](#select-story)
>     - Select Chapter
>     - Comment on Story
> 3. [Create story](#create-story)
> 4. [Edit Story](#edit-story)
>     - Add new chapter
>     - Add/Edit chapter content
> 4. [Account Logout](#account-logout)

---
### Action Descriptions
#### Search for Story
> Search for stories based on various conditions. A story can be searched for using a search query or by specifying a filter for tag or genre. A search can only use one search condition. A user cannot use both a search query and tag fiter to search for stories.

#### Select Story
> Select a story from a list of displayed stories. When a story is selected there are other actions available for a user.

> ##### Select Chapter
> Choose a chapter from the selected story. This action will pull up the content of the chapter for user viewing.

> ##### Comment on Story
> Create a comment about the story for all users to see. This action is only avaible to registered users.

#### Create Story
> Create a new, empty story under a user account. This action is only available to registered users.

#### Edit Story
> Change the title, description, and/or contents of a story. This action is only available to registered users. There are other actions associated with editing the story.

> ##### Add a New Chapter
> Create a new empty chapter for the story that is currently being edited.

> ##### Edit the Contents of a Chapter
> Create new content for a story's chapter or edit said content.

#### Register Account
> Create a new account for the application. This action is only available to anonymous users. This makes an anonymous user a registered user.

#### Account Login
> Access an account that has been previously registered to the application. This action is only available to anonymous users. This makes an anonymous user a registered user.

#### Account Logout
> Closes the currently accessed account. This action is only available to registered users. This makes a registered user an anonymous user.

---
### Action Paths

    /------> Home View         /------> Account View            /--------> Story Edit View
    |   _________________     /      __________________        /       _______________________
    |  |      Login      |---/      |   Create Story   |------/       |  Create New Chapter   |---\
    |  |    Register     |--/       |   Select Story   |-----/        |     Select Chapter    |----\
    |  |  Search Stories |----\     |     Logout       |---\          |_______________________|     \
    |  |_________________|    |     |__________________|   |                                        |
    |                         |                            |     /----> Stories Found View          |
    |                         |                            |    /      __________________           |
    |                         \----------------------------|---/      |   Select Story   |----\     | 
    |                                                      |          |__________________|    |     |
    |                                                      |                                  |     |
    \------------------------------------------------------/                                  |     |
                                                                                              |     |
                             /----------------------------------------------------------------/     |
                             |                                 /------------------------------------/            
                             |                                 | 
                             \----> Story Read View            \-------> Chapter Edit View
                                ______________________                 ________________________
                               |    Select Chapter    |               |   Create New Content   |
                               |   Comment on Story   |               |  Edit Chapter Content  |
                               |______________________|               |________________________|
    
