# Backend Routes

| method     | path           | subpath             |  description                                                  |
| ---------- | -------------- | ------------------- | -------------------------------------------------             |
| GET        | /users         | /:id                | Get information of a single user.                             |
| POST       | /users         |                     | Create a new user.                                            |
| GET        | /users         | /:id/heroes         | Get information of all heroes a user owns.                    |
| ---------- | -------------- | ------------------- | -------------------------------------------------             |
| GET        | /heroes        | /:id                | Get information of a single hero.                             |
| POST       | /heroes        |                     | Create a new hero.                                            |
| GET        | /heroes        | /:id/stories        | Get information of all stories associated with a hero.        |
| GET        | /heroes        | /:id/dailytasks     | Get information of all daily tasks associated with a hero.    |
| GET        | /heroes        | /:id/memoirs        | Get information of all memoirs associated with a hero.        |

| GET        | /stories       | /:id                | Get information of a single story.                            |

