# SIGN UP

## SUCCESS CASE

1. ✅ Receives a request of type **POST** in the route **/api/signup**
2. ✅ Validates mandatory data
   1. Username
   2. Email
   3. Password
   4. Password confirmation
3. ✅ Validates that **password** and **passwordConfirmation** are the same
4. ✅ Validates that the **email** field is a valid email address
5. ⛔️ Validates if there is already a user with the email provided
6. ✅ Generates an encrypted password (it cannot be decrypted)
7. ✅ Creates an account for the user with the entered data, replacing the password with the encrypted password
8. ⛔️ Generates an access token from the user ID
9. ⛔️ Updates user data with generated access token
10. ⛔️ Returns 200 with access token

## EXCEPTIONS

1. ✅ Returns 404 error if API does not exist
2. ✅ Returns 400 if **username**, **email**, **password** or **passwordConfirmation** are not provided by the client
3. ✅ Returns 400 error if **password** and **passwordConfirmation** are not equal
4. ✅ Returns 400 error if **email** field is invalid email
5. ⛔️ Returns 403 error if the email provided is already in use
6. ✅ Returns 500 error if it fails when trying to generate an encrypted password
7. ✅ Returns 500 error if there is an error trying to create the user account
8. ⛔️ Returns 500 error if there is an error when trying to generate the access token
9. ⛔️ Returns 500 error if there is an error when trying to update the user data with the generated access token