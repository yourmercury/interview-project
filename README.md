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
  
 
    
    
