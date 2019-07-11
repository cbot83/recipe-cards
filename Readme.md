#To Develop

`npm run dev`


#To Deploy

`npm run build`<br>
`firebase deploy --except functions`<br>


#Product Goals

## Start to add users
1. Allow other users to make a copy of a different users recipe. (and have feedback to show what happened)
2. Make editing another users recipe automatically copy it to your recipes (and have feedback).
3. Change what is available when you're not logged in to view, homepage etc.

## Improve UX of recipe editing
1. Allow addition of ingredients
2. Allow addition of steps
3. Allow users to reorder ingredients and steps.

## Improve Recipe Adding UX
1. Link to URL's and to books on Amazon

## Revenue Goals
1. Links to books on Amazon should be linked to a company Amazon account.

## Data Upgrades
1. Track different versions of the software.

## From User Testing
1. Make the recipes easier to enter (copy the link and have it auto fill)
2. Need feedback that the recipe was added successfully (and take you to that recipe right away).
3. Need feedback that the recipe has been updated and saved.

## Increase Addictiveness of OR
1. Add a point system for how many users have a copy of your recipe, extra points if it's unchanged, and extra points if the recipe has been cooked many times.


#To Do

## Coding
- style and place source url in recipe card
- give alternate options for source of recipes in new recipe form
- style new recipe form
- style buttons on modal recipe
- make a logo for the site
- add more than just recipe name to the list of recipes
- make a one button copy of recipes from other peoples cards

## Firebase Related
- set proper database security rules
- discover firebase functions


#Bugs to Fix
- Full screen view while cooking allows screen to go to sleep


#Historically helpful articles

[React with typescript and webpack boilerplate](https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6)

[User Authentication](https://css-tricks.com/firebase-react-part-2-user-authentication/)