## Project Name : The Birdhouse

* [**Project Brief**](#Project-Brief)
The Birdhouse is a platform were users can upload pictures of birds they have spotted. They can post where they have found them which helps other users to spot birds. 
This is to create an online community where people feel safe. This forum will also help boost the users mental health and welbeing by encouraging eachother to go out and spot birds and share the joy with other users.

# **TABLE OF Contents**

* [**User Experience** ](#User-experience)
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
![Models](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722517344/Screenshot_2024-08-01_140209_l775wf.png)

- Frontend Flowchart 
![flowchart](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722516945/Screenshot_2024-08-01_135528_xeubpd.png)

# Design-and-Color-Scheme
![ColorScheme](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722516533/Screenshot_2024-06-22_081217_xuukdr.png)

# Frontend Wireframes
![Documentation1](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500841/documentation1.png)
![Documentation2](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500852/documentation2.png)
![Documentation3](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500863/documentation3.png)

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

https://docs.google.com/document/d/15OvMF0vv1gsvvdaXJHcA-6Pp0M1fpKidckkbuRtrGvM/edit

One error that I ran into was that my drowpdown menu on the createbirdpost page was that I hadn't set setters and used a function instead. To make this work I changed const [bird] to [setBird].

There was also a CSS error on the image for creating a new post because I hadn't set the css width for images. This has now been changed. 

Another problem during deployment was that the user was not getting redirected after deletion or creation of a post, but this has now been solved by adding the redirect. 

Also, the comments were displaying on all pages no matter which post they had wrote on. This is because I had one instance written as 'birdpost' rather than 'post'. This has now been fixed and you can only see the comments for specific pages.

Eslint Validator had no errors:

![Eslint](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722522876/Screenshot_2024-08-01_153410_iju5bs.png)

CSS Validator:

![CSS](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722523353/Screenshot_2024-08-01_154207_g3ccmi.png)

# Back end Deployment 
- ElephantSQL
I created a new instance on ElephantSQL and copied the API key into the env.py file. 

- Heroku
To deploy to Heroku I logged into my accound and created a new app. In Settings I clicked deploy. I then connected this to my gitpod repository and set the config vars. I then deployed my branch and run the app. This was to deploy the backend api first, and it then was able to display the veiws. 
To display my react app in the deployed version I need my veiw to render my index.html page.

# Frontend deployement 

- React:

To create the react app I set up a frontend folder within my project. In the frontend folder I installed react using the npx create-react-app command. 
After all the packages were installed I ran the npm start command. 

- deployment:

Because my project was a joint workspace I could not deploy untill the end of my project. To do this I followed the steps on code insitutes supporting documentation. I chances my urls to say api/ then removed the root. I then added a base url. Then I copied over the static files using the terminal and pushed my changed. The app branch was then updated on Heroku. 

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


For bird dropdown component:

https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

https://stackoverflow.com/questions/31130706/dropdown-in-django-model

https://docs.djangoproject.com/en/5.0/ref/models/fields/#:~:text=choices%20is%20meant%20for%20static,t%20change%20much%2C%20if%20ever.&text=A%20new%20migration%20is%20created,for%20the%20field's%20current%20value.

https://react-bootstrap.netlify.app/docs/forms/select/

approval model:
https://www.youtube.com/watch?v=pwkAMX1zgOI

https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function 
