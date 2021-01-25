# DTC-SEVA

# Description
Problem Statement:
To build a mobile application which can be used for buying the DTC bus travel tickets.


Solution Proposed:
Build a react native application which can serve as a common application for both iOS and Android.

It should provide the following services:
1)	User Sign in/Sign up.
2)	User Authentication using email/username and password.
3)	Track the history of user travel in DTC buses.
4)	Providing a personal experience to the user.
5)	Provide ability to any user to purchase bus tickets by providing easy UI.
6)	Maintaining the session of a user in local storage.
7)	Real time rendering of the data related to each user.
8)	Provide facility to do payment via various payment gateways.

Technologies Used:
React Native, Firebase.

                                       

Working:
1)	The first-time users have to sign on the application entering the basic details about themselves. All the details will be saved in users database.
2)	All the information of various routes will also be saved in DTC-ROUTE database.
3)	Once the user is registered, he/she can login using email/username and password.
4)	On the homepage, there is an option to scan QR code available in the bus which in turn return the list of all bus stands from firebase database.
5)	The user can select the number the number of tickets to buy. 
6)	User can also select the option of History to check the record of his/her travel history.


To run the project 
do the following:

# npm install

# npm start

# scan the qr code

# run on expo app
