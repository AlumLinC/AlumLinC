# AlumLinC

Learn About Schools. Get Answers.

## Contributing Guidelines

### Getting the code

To get the code clone the repo:

```
git clone https://github.com/AlumLinC/AlumLinC.git
```

### Before You Commit

Before commiting, please run:

-   `npm run lint`: Lint your code to make sure it meets our standards
    > Note: A warning from `@next/next/no-page-custom-font` is allowed
-   `npm run format`: Formats your code to make sure it matches the codebase style
-   `npm run build`: Builds your code to ensure that production builds work

If your code complies with our standards, then we will review your code. If your code doesn't pass these tests, we won't consider mergin any PRs or move commits to production.

### Pushing Your Code

Unless you have explicit permission, please don't push your code to the `main` branch. Instead, make your changes on a branch named `contrib:your_github_username`. This branch will be exclusive to you and can be used to push your code the GitHub repository.
Once your code is pushed, you may open a pull request to merge your code into `main`.

### A Note On The deploy Branch

The `deploy` branch is used to ship code to production.
For this reason, only the codebase manager will be allowed to push and merge code into this branch.
Please don't ask for your code to be shipped. It will be shipped once the project manager determines that the codebase is ready.
