# MaPS QE UI Technical Task

Your task is to create a functional automated UI test suite using JavaScript, TypeScript, or a language of your choice. We would prefer you to use tools like Playwright or Cypress. However should you opt to use a different tool, such as Selenium with Java, we will inquire as to your reasoning's into why you did not opt for an alternative framework or language.

There are no trick questions; we want to see your solution work, analyse your code structure, and understand your thought process.

## 📝 The Task - Part 1

On a public facing UK Government webpage 'Calculate your holiday entitlement', please write a working automated UI test suite. If the language/framework you decide to use supports BDD/Gherkin, you have the choice to use this or not. Though its usage is optional and therefore won't impact scoring.
An example feature file has been added to this repository should it be needed for reference.

You have autonomy on this task, the only remits are that you keep to the language and tools we have mentioned, that you provide a working solution and clear instructions on how to build and execute your solution.

We are looking for a demonstration of your technical skills, your ability to write a clear working solution that can be shared, and your 'tester mindset'.

The URL for 'Calculate your holiday entitlement': https://www.gov.uk/calculate-your-holiday-entitlement

## 🎢 The Task - Part 2 (bonus task)

At MaPS, we prioritise Accessibility. While we understand that not everyone may meet our understanding of the subject, we are eager to gauge your knowledge and awareness in this area.

Task two is to launch the basic web page we have created 'index.html' and provide us with a list of Accessibility issues/bugs you can find.

You can provide your list of answers anywhere you like, but tell us where you have put them. (e.g. within you README.md). Finally please provide at least one of them in the format of a Bug report. (doesn't have to be more then 1 in this format, the others can just be a quick list).

#### Page Launch Instructions

To launch the page locally, follow these simple steps:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```
3. Open your web browser and navigate to:
   ```bash
   http://localhost:8080/
   ```

## 🕗 Time Allocation

There's no strict time limit for completing this task before the specified deadline given, we don't expect an extensive number of tests, but a well-rounded selection is appreciated.

If you have the time and inclination, feel free to attempt Task 2 (bonus task), also provide any additional thoughts on your framework solution, with any further considerations you would take in to account if you had more time.

## 📨 Presenting/Submitting Your Solution

Please download and email your solution from a private Github repository you have created and send the Zip back to us. Any issues please do get in touch with the recruiter you have been speaking with.


## Automated Test Suite Overview

This project contains a Playwright + TypeScript based automated UI test suite for the UK Government “Calculate your holiday entitlement” page. It demonstrates maintainable, data-driven tests using a Page Object Model (POM) design.

---

# Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. Install dependencies:

```bash
npm install
```

---

# Running Tests

Run all tests headlessly:
```bash
npx playwright test
```

Run tests with browser UI visible:
```bash
npx playwright test --headed
```

---

# Test Reports

After tests run, generate and view an HTML report with:
```bash
npx playwright show-report
```

---

# Data-Driven Testing

Test inputs and expected results are dynamically loaded from `public/data/testData.json`. Extend or modify this JSON to add new scenarios without changing test code.

---


# Project Structure

| Folder / File       | Purpose                                                |
|---------------------|--------------------------------------------------------|
| `/tests`            | Test specification files                               |
| `/pages`            | Page Object Model classes encapsulating UI interactions|
| `/data`             | JSON files containing test data                        |
| `playwright.config.ts` | Playwright configuration (browsers, retries, tracing)|

---

# Future Enhancements

- Broaden test coverage with negative and edge cases
- Integrate accessibility testing and reporting
- Add CI/CD pipeline for automated validation

# See [Task.md](./AccessibilityTask.md) for the full accessibility review and bug reports.
