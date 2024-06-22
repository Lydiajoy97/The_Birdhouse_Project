## Project Name : The Birdhouse

* [**Project Brief**](#Project-Brief)
The Birdhouse is a platform were users can upload pictures of birds they have spotted. They can post where they have found them which helps other users to spot birds. 
This is to create an online community where people feel safe. This forum will also help boost the users mental health and welbeing by encouraging eachother to go out and spot birds and share the joy with other users.

# **TABLE OF Contents**

* [**User Experience** ](#User-experienceX)
* [**User Stories**](#User-Stories)
* [**Wireframes** ](#Wireframes)
* [**Surface-plan**](#Surface-plan)
* [**Features** ](#Features)
* [**Frameworks and libraries**](#Framewores-and-Liberies)
* [ **Testing**](#Testing)
* [ **Deployment**](#Deployment)
* [**Credits** ](#Credits)
* [**Acknowledgements** ](#Acknowledgements)

# User-Experience 

# User-Stories:
1) As a user I want to be able to create an account and sign in to the platform so that I can add content. 
2) As a user I want to post pictures of the birds that I have spotted. 
3) As a user I want to comment and like other users bird pictures. 
4) As a user I want to veiw other users profile and learn more about their intrests. 
5) As a user I want to filter posts so that I can see different types of birds. 
6) As a user I want good user experience navagating the website.

# Features 
- Navagation between pages 
- Create an account and profiles
- Log in and log out buttons and functions
- Post bird pictures and content 
- Comment on others posts 
- Delete own posts and comments

# Structure-Plan:
- API structure 

- Frontend Flowchart 
![flowchart]()

# Design-and-Color-Scheme


# Frontend Wireframes
![image]('frontend/src/assests/homepage.png')
![image]('frontend/src/assests/signin.png')
![image]('frontend/src/assests/profile.png')

# Future developments 
- One future development is to have a meet up page where users can arrange a spot to meet up and book a place. There will be an interactive map feature and bookings form. This is the build on the community they have found through the bird spotting page. 

- Another feature development is to add a react-bootstrap carosel on the home page. This will add to user experience and the overall look of the website. 

- I would also like to add a likes feature so that the users can like eachothers posts. 

- Another future development is to create the profiles page where a user can update and delete thier profile.

- Another future devlopment is to add a page footer so that a user can contact The Birdhouse and find the socail media pages.

# Testing-and-Results 
Strategy:
Much of the testing has been done during devlopment such as the back-end testing. My Api connects to my frontend and I am able to minipulate data. I can veiw my admin console and edit and delete posts on there. 


Testing Results:
 You can veiw my testing results here:
![testing](https://docs.google.com/document/d/15OvMF0vv1gsvvdaXJHcA-6Pp0M1fpKidckkbuRtrGvM/edit)

There are a few bugs especially with displaying the comments and the user being able to edit and delete them. I am uable to solve this error.
A user can edit their post straight after posting, but not once they have navigated onto the page. Again, I am unable to solve this error. They are also unable to delete which remains unsolved.

There is also a style issue on the account creation page that I will fix in a future development.

I received 1 warning in Eslint with the missing dependacy 'comments' error. I tried to fix this issue but it remains unresolved.

# Deployment 
- ElephantSQL
I created a new instance on ElephantSQL and copied the API key into the env.py file. 

- Heroku
To deploy to Heroku I logged into my accound and created a new app. In Settings I clicked deploy. I then connected this to my gitpod repository and set the config vars. I then deployed mmy branch and run the app. This was to deploy the backend api first, and it then was able to display the veiws. 
To display my react app in the deployed version I need my veiw to render my index.html page.

- React 
To create the react app I set up a frontend folder within my project. In the frontend folder I installed react using the npx create-react-app command. 
After all the packages were installed I ran the npm start command. 

# Credits 

Code Insitutes DRF and Moments Walkthroughs

https://stackoverflow.com/questions/31976722/start-script-missing-error-when-running-npm-start

https://www.w3schools.com/css/css3_transitions.asp

https://builtin.com/software-engineering-perspectives/react-api

https://stackoverflow.com/questions/55308778/typeerror-undefined-is-not-iterable-cannot-read-property-symbolsymbol-iterato

https://legacy.reactjs.org/docs/forms.html

https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method

https://www.youtube.com/watch?v=TmsD8QExZ84&t=974s

https://pypi.org/project/django-filter/

https://flaviocopes.com/axios-send-authorization-header/

https://stackoverflow.com/questions/70945123/how-can-i-add-a-image-on-a-post-in-django#:~:text=ImageField(upload_to%3D%22%2Fmedia,code%20should%20be%20like%20this.


For the bird images:

https://pixabay.com/illustrations/upload-internet-web-publish-media-2398772/

https://pixabay.com/photos/tit-great-tit-bird-feathers-8620213/

https://pixabay.com/photos/passerine-bird-wildlife-bird-fauna-7377802/

https://pixabay.com/photos/bird-robin-spring-flowers-perched-2295436/

https://pixabay.com/photos/bird-seagull-flying-wings-gull-3158784/

https://pixabay.com/photos/bird-bath-splashing-bird-in-bath-5290285/ 

https://pixabay.com/photos/blue-tit-tit-bird-animal-feathers-7965696/ 

https://pixabay.com/photos/bird-animal-nature-wildlife-plant-7310393/ 