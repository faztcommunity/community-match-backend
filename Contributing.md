# Contribution Guidelines
hi, welcome to community-match-backend please read the following guidelines.
if you want more information please join our [discord server](https://discord.gg/rg3fKr6) :D

## Basic rules
the commits will have to be like this:

`git commit -m "feat/fix/refactor/hotfix/docs: commit description"` 

branchs will have to be like this: 

`called as the name of the task/issue/action`

## First steps before contribute ->
**1.** - Go to [issues](https://github.com/faztcommunity/community-match-backend/issues) and try to find what has been discussed.

**2.** - Go to [Projects](https://github.com/faztcommunity/community-match-backend/projects) and try to find tasks to do

**3.** - If your issue isn't addressed yet, you should open a new issue & please provide as much descriptions and details as you can, if it's a bug, feature, request, problem, etc... .

**4.** - Ask to assign you that issue, then wait to mainteiners / admins to aprove it.

**5.** - Create a pull request with your changes commited, you must link the issue you created earlier that was approved by a contributor or maintainer.

## How to contribute ->

**1. - fork the repository**
fork repository to your git hub account. You can do this by clicking on the Fork button provided in the top right corner of the repository page.

**2. - Clone the fork to your system**
you have to clone your fork repository by following this steps:

![clone Button](https://i.imgur.com/LRwcyCF.png)

press clone button  and you should see something like this :

`remind this is an example you do not have to copy the same link`

![enter image description here](https://i.imgur.com/SDQhXbL.png)
 
 then click here
  ![enter image description here](https://i.imgur.com/CaGONxD.png)

and in your clipboard you should have somthing like this 

`https://github.com/YOUR_GITHUB_USERNAME/community-match-backend.git`

and in your system run :
`git clone https://github.com/faztcommunity/community-match-backend.git`

**4. - make changes and commit it**
to avoid future conflicts between your fork and the main repository, you should run this command:

`git remote add upstream https://github.com/faztcommunity/community-match-backend.git`

you will just have to run the comand once.
your changes will have to be in another branch called as the name of the task/issue/action and in that branch you will run:

`git add .` to stage all your new changes.

`git commit -m "feat/fix/refactor/hotfix/docs: commit description"` to add a commit.

`git pull upstream main` to check any conflicts. case there are conflicts you will have to solve it.

`git push origin BRANCH_NAME` to push your commit.

**5. - pull request**
after pushing to your forked repository create a pull request from your account by clicking on the pull request button.
Please give us a detailed descriptionof what did you do in the pull request.

---
thanks for reading it and keep coding 🎉



