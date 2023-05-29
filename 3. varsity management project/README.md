`resources`
1. [eslint and prettier](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
2. [husky](https://typicode.github.io/husky/getting-started.html)
3. [lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=readme)
# REQUIREMENT ANALYSIS

## We are build a varsity management project where we will have roles:

1. admin
2. student
3. faculty

## Functional requirement

1. student

   1. can login and logout
   2. can manage and delete their profile
   3. can update certain fields
   4. can enroll in a semester
   5. can enroll in offered courses in specific semester
   6. can pay their semester fees through offline or online (Partial/full payment)
   7. can see their transaction history
   8. can see their class routine
   9. can see their notice board and events
   10. can see their results (full/ semester wise)
   11. can evaluate their teacher

2. admin

   1. login and logout
   2. manage nad update profile
   3. only update certain fields
   4. manage user accounts
      1. block/unblock
      2. change password
      3. forcefully logout
   5. manage multiple process
      1. semester
      2. offered courses
      3. section
      4. faculty
      5. student
      6. building
      7. room
      8. payment
      9. permission
      10. activity

3. faculty

   1. login and logout
   2. manage nad update profile
   3. only update certain fields
   4. manage user accounts
   5. mange student grade
   6. access to academic and personal information
   7. manage their lecture resources

# Services (Model)

1. Authentication Application

   1. Permission

      1. title

   2. userPermission

      1. permissionId
      2. userId

   3. user:

      1. id
      2. role
      3. password
      4. createdAt
      5. updatedAt
      6. studentId || adminId || faculty

   4. student:

      1. id
      2. name
         1. firstName
         2. middleName
         3. lastName
      3. gender
      4. dateOfBirth
      5. guardian
      6. contactNo
      7. emergencyContactNo
      8. email
      9. presentAddress
      10. permanentAddress
      11. department
      12. subject

   5. admin:

      1. id
      2. password
      3. role
      4. name
         1. firstName
         2. middleName
         3. lastName
      5. gender
      6. dateOfBirth
      7. email
      8. contactNo
      9. emergencyContactNo
      10. department
      11. designation

   6. faculty:

      1. id
      2. name
         1. firstName
         2. middleName
         3. lastName
      3. gender
      4. dateOfBirth
      5. email
      6. contactNo
      7. emergencyContactNo
      8. department
      9. faculty
      10. designation

## API END POINTS:

      1. User:
            1. user/create-students (POST)
            2. users/create-faculty (POST)
            3. users/create-admin (POST)
            4. users/my-profile (GET)
            5. users/:id (GET)
            5. users/:id (DELETE)
            6. users/:id (PATCH)
            7. users/:id/force-logout
            8. users?page=1&limit=10 (GET)
            9. users/:id/available-permissions?page=1&limit=1-
            10. users/:id/assigned-permissions?page=1&limit=10 (GET)
            11.users/:id/assign-permissions (POST)
            12. users/:id/remove-permissions (POST)
      2. students
            1. students/:id (PATCH)
            2. students/:id (GET)
            3. students?page=1&limit=10 (GET)
      3. faculties
            1. faculties/:id (PATCH)
            2. faculties/:id (GET)
            3. faculties?page=1&limit=10 (GET)
      4. admin
            1. admin/:id (PATCH)
            2. admin/:id (GET)
            3. admin?page=1&limit=10 (GET)
      5. permission
            1. permissions?page=1&limit=10 (GET)
            2. permissions (POST)
            3. permissions/:id (GET)
            4. permissions/:id (PATCH)
            5. permissions/:id (DELETE)
      5. Auth
            1. auth/login (POST)
            2. auth/refresh-token (POST)
            3. auth/change-password (POST)
            4. auth/forgot-password (POST)
            5. auth/reset-password (POST)

## Plans

1. project setup (jira)
2. eslint & prettier
3. huskey and lint stage
