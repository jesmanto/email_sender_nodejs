# email_sender_nodejs
A NodeJs will send an automated email to a Gmail account. 

### To test the app:
* Run a POST request with using localhost:3000/register as the endpoint on your local machine.
* Pass in the following as the body:
```
{
    "name": "xyz",
    "email": "xyz@gmail.com"
}
```

You can also send to multiple gmail accounts by giving the email key an array value.
```
{
    "name": "xyz",
    "email":[ "xyz@gmail.com", "abc@gmail.com", ... ]
}
```


### NB:
The email account(s) must be gmail account(s). This app is not yet confgured to work with other email providers.
![Screenshot_20220719-041509](https://user-images.githubusercontent.com/27390903/179707838-f042fe82-1b08-491d-8924-74b844ffced9.png)
