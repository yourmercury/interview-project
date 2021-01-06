# project

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Jan 05 2021 03:02:30 GMT+0100 (West Africa Standard Time) using Sails v1.4.0.

<!-- Internally, Sails used [`sails-generate@2.0.1`](https://github.com/balderdashy/sails-generate/tree/v2.0.1/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

# interview-project

## Usage
An ordering system for ordering dishes.. 

## APIs
  ## /getorder :
    this is a post endpoint that expects the following feilds
    dish : food
    custormerId: got from your login
    quantity: how many dishes you want
    
    it retrns all orders made by a customer
    
   ## /createorder
    this is a post endpoint that expects the following feilds
    dish: food
    customerId: got from your login
    quantity: how many dishes
    
    it returns the order
    
   ## /editorder
    this is a post endpoint that expects the following feilds
    dish: food
    id: the order id
    quantity: how many dishes
    
    it returns the new order;
    
 ## Login
  To login, use the login api /login
  it expects the following through post
  email: unique email,
  password: not less than 6 characters
  
  returns user and auth by JWT in cookie
  
 ## signup
  To sign up, use the signup api  /signup
  it expects the following through post
  fullName: full name,
  email: unique email,
  password: not less than 6 characters
  
  returns user. login to get auth
  
 
    
    

