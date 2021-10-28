
![](https://img.shields.io/badge/Microverse-blueviolet)

# Book Car Appointment- React-Rails Capstone project 

> The project is the final capstone group were are going to build for an appointment app for cars for users to book on an appointment app to create, reserve and see list of reserved cars. 

  
This app is designed follwing a real world senerio with given designs, and we had to personalize the content.[Find project specifications here](https://github.com/microverseinc/curriculum-final-capstone/blob/main/projects/business_requirements.md)


<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/mrigorir/group-final-capstone-react)
[![Github Issues](https://img.shields.io/badge/Github%20-Issues-red)](https://github.com/mrigorir/group-final-capstone-react/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/Hello-world-rails-react/pull/1)
[![Backend API Repo](https://img.shields.io/badge/Backend-API%20Repo-purple)](https://github.com/ccobasi/group-final-capstone)
[![API DOCS](https://img.shields.io/badge/API-Documentation%50-yellow)]()

</div>

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Authors</a>
</p>


># Project requirements
  ## Basics

1. Proper authenticated login.

2. In the navigation panel, the user can see links to:

* Car items that you selected as a theme.
* "Reserve" form.
* "My reservations".
* "Add Car that you selected as a theme"
* "Delete  Car that you selected as a theme" 


3. On the main page, the user can see a list of Car
When the user selects a specific item, they can see the details page with its full description

4. In the details page, the user can click the "Reserve" button .

When the user clicks the "Add item" link in the navigation panel they can see a form for adding a new item.

5. When the user clicks the "Delete item" link in the navigation panel they can see a list of all items with title and "Delete" button.
   
6. When the user clicks the "Delete" button, the selected item is marked as removed and does not show on the main list anymore.
   
7. To reserve an appointment, the user has to select a date and city (username and selected item are autofilled).


8. When the user clicks the "My reservations" link in the navigation panel they can see a list of their reservations (with information about item name, date and city)

9. Add full documentation for your API.

10. Implement proper user authentication from the front-end to the server.
Make sure that the "Add item" and "Delete item" links are accessible only by users who are admins.

># Technical set up
1. Set up the repository/repositories on GitHub and use Gitflow.
   
2. You should use Postgres as your database
   
3. Use Rails to create backend API.
   
4. Use React & Redux to create frontend UI.

## 📝 Contents
 
## 🔧 Built with<a name = "with"></a>


- React/Redux
- Hooks
- React Routes
- React-dom
- HTML, CSS, JavaScript (ES6)
- Ruby
- Rails
- gem 'react-rails'
- gem 'webpacker', '~> 5.0'
- gem 'spring'
- PostgreSQL
- react 17.0.2
- react_ujs 2.6.1
- react-redux 7.2.5
- react-router-dom 5.3.0
- redux 4.1.1
- redux-logger
- redux-thunk
- Linters: Rubocop, ESLint
- NPM
- Functional based Components with React Hooks 
- Virtual DOM
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules 
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
- Use [React Router](https://reactrouter.com/).
- Use styles in a React app. [CSS modules](https://github.com/css-modules/css-modules).
## Getting Started <a name = "gs"></a>
> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>

  ### Database Setup

- In your terminal, while in the root dir of your Rails project, type <code>bin/rails db:setup</code> to create your local databases, load the schema, and initialize with the seed data.

## Usage

1. In your terminal, run <code>bin/rails server</code> while inside the root directory of the repository files
2. Go to your browser of choice and enter this URL: [http://localhost:3000](http://localhost:3000)
3. \[Optional\] if you want to make changes to the JavaScript file and see changes immediately, run `./bin/webpack-dev-server`
4. Refresh the page to see a different greeting message! 😸

**Note:<br>_ These commands will not stop on their own. If you change something in your project files, it will recompile and reload the page in your browser. To exit, hit "ctrl + c"_**

## Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- for ESlint, `npx eslint <path of file>`
- for Rubocop, `rubocop .`

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/Hello-world-rails-react.git
$ cd Hello-world-rails-react
~~~

Run `bundle Install` to install the node modules and webpacker.

Run `yarn build` to build the bundler.

Run `yarn start`  opens on `http://localhost:8080/` in your browser.

## Set up
* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>



## Project Structure

    Hello-world-rails-react Project
    └── node_modules
    └── .github\workflows
        └── linters.yml
    /src
    |---/components
    |---/redux
        |--- /Cars
                | cars.js
        | cofigureStore.js
    | index.js
    └── .eslintrc.json
    └── .gitignore
    └── .hintrc
    └──.stylelintrc.json
    └── MIT.md
    └── package-lock.json
    └── package.json
    └──README.md

## ✒️  Authors <a name = "author"></a>


👤 **Marco**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
👤 **Joyceline**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)

👤 **Abigeal**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
👤 **Chuwukma**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mrigorir/group-final-capstone-react/issues)
## 👍 Show your support

- Microverse: [@microverse](https://www.microverse.org/)
  

## Acknowledgments

- Microverse
- Murat Korkmaz: [on behance](https://www.behance.net/muratk)

## 📝 License

This project is [MIT](./MIT.md) licensed.
=======
# Final Group Capstone Project - React-Rails Cars App

> This final capstone project uses Rails as an API server and uses React as the frontend using the API endponits to display RESTful routes displaying car models witch the user can reserve for it's own use, only admins can register and delete the cars. User can login and register.

## This project was built with:

 - React.

 - Redux for state management.

 - React Bootstrap.

 - React Fontawesome.

 - React-router-dom.

 - [Rails](https://morning-chamber-68237.herokuapp.com/) API features.

## Image Preview
![Screenshot Main Page](./src/dist/images/bg-reserve2.png)

## :star: [Live Demo](https://loving-curran-adbfe4.netlify.app/) :star:

## Getting Started

To get a local copy up and running follow these simple example steps:

- On the project, GitHub page, navigate to the [main page of the repository](https://github.com/mrigorir/group-final-capstone-react)

- Click on a button named `code`

- Copy the project URL as displayed on HTTPS tab

- If you're running Windows Operating System, open your command prompt. On Linux, Open your terminal


- Change the current working directory to the location where you want the cloned directory to be made. Leave as it is if the current location is where you want the project to be.

- Type `git clone`, and then paste the URL you copied in Step 3.<br>

  `$ git clone https://github.com/mrigorir/group-final-capstone-react.git` <em>Press Enter key</em><br>

- Your local copy will be created.

- Please note that you must have Git installed on your PC, this can be done [here](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

- After you get the project aiming to the desired directory, you need now to install dependencies by running npm install.


### Github Actions

To make sure the linters' checks using Github Actions work properly, you should follow the next steps:

1. On your recently forked repo, enable the GitHub Actions in the Actions tab.
   
2. Create the `feature/branch` and push.
   
3. Start working on your milestone as usual.
   
4. Open a PR from the `feature/branch` when your work is done.

### Usage 

- Make sure you have npm and node installed.

- I recommend the use of VS code as a code editor, but you can use any code editor.

- Run in your terminal `npm run start` to see the run the app in your default browser.

- You should see the rockets page as the page loads. 

- Click on the various links in the Navigation bar to Navigate to the different pages. 

## Authors

👤 **Marco Parra**

- GitHub: [@mrigorir](https://github.com/mrigorir)
- Twitter: [@marcoparra311](https://twitter.com/marcoparra311)
- LinkedIn: [@marco-alonso-parra](https://www.linkedin.com/in/marco-alonso-parra/)

👤 **Eri Ngozi**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)

👤 **Chuckwuma Obasi**
- Github: [@ccobasi](https://github.com/ccobasi/)
- Twitter: [@MagzCelyn](https://twitter.com/obasichux)
- Linkedin: [linkedin](https://www.linkedin.com/in/chukwuma-obasi/)

👨‍💻 **Jocyline Magero**

- Github: [@jmagero](https://github.com/Jmagero)
- Twitter: [@MagzCelyn](https://twitter.com/magero_jocyline)
- Linkedin: [linkedin](https://www.linkedin.com/in/jocyline-magero)

👩‍💻 **Ijay Abby**

- GitHub: [@IjayAbby](https://github.com/IjayAbby)
- Twitter: [@Ijay_js](https://twitter.com/Ijay_js)
- LinkedIn: [Abigael Nyangasi](https://www.linkedin.com/in/ijayabby4/)
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mrigorir/group-final-capstone-react/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Microverse Activities.

- Microverse coding partners. 

## 📝 License

This project is [MIT](https://github.com/mrigorir/group-final-capstone-react/blob/main/LICENSE) licensed.
