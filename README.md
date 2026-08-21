# Sensory Environment Tracker

A terminal based JavaScript application that allows users to record their ratings of environmental factors such as noise, light, temperature, and humidity. The program stores entries during the session and provides a summary.

## Features

* **Environment Ratings:** Rate noise, light, temperature, and humidity on a 1–5 scale
* **Notes:** Add optional notes to each entry
* **History:** View previously recorded entries
* **Summary:** Calculate average ratings for each environmental factor
* **Input Validation:** Prevents invalid ratings outside the 1–5 range
* **Interactive Menu:** Add entries, view history, view summaries, or exit
* **Terminal-Based:** Runs directly in the command line

## How It Works

The user creates an entry by rating four environmental factors:

* **Noise:** 1–5
* **Light:** 1–5
* **Temperature:** 1–5
* **Humidity:** 1–5

The user can also add optional notes.

The history feature displays previous entries, while the summary feature calculates the average rating for each environmental factor.

**Note:** The ratings are subjective user inputs and are not measurements from physical sensors.

### Prerequisites

You need Node.js installed on your system.

### Running the Program

Download the repository as a ZIP from GitHub and extract it. Open Terminal and navigate into the downloaded project folder.

From inside the project folder, run:

```bash
node src/sensory_tracker.js
```
The program will then run in terminal.

## Use the Program

After starting the program, you will see four options:

1. Add Entry
2. View History
3. View Summary
4. Exit

### Add Entry

Select 1 and rate each environmental factor from 1–5. You can also enter optional notes about the environment.

### View History

Select 2 to view all entries recorded during the current session.

### View Summary

Select 3 to calculate and display the average rating for each individual environmental factor.

### Exit

Select 4 to end the program.

## Demo Video
In this video, I go through options 1, 3, and 4

https://github.com/user-attachments/assets/ebe72edc-c84d-49d8-a5ad-341ed494ef74

## What I Learned

This project helped me practice:

* JavaScript functions
* Arrays and objects
* Conditional statements
* User input with Node.js (readline)
* Calculating averages
* Building an interactive terminal application

## Problems I Encountered

* Needed to learn how to collect user input in a Node.js terminal application. This is something new to me. 
* Had to validate user ratings so that ONLY whole numbers from 1–5 were accepted.
* Needed to organize multiple environmental measurements into objects and store them in an array.

## Development Process

I developed the project by first creating the terminal input system and then adding the rating validation, entry storage, history display, and summary calculations.

I tested the program using valid and invalid ratings, multiple entries, optional notes, and different menu selections.

## Future Improvements

* Saving entries to a file so they persist after the program closes
* Adding timestamps to entries
* Adding visual charts or graphs
* Creating a graphical user interface
* Allowing users to customize the rating categories
* Creating a connection between this and my "Environment Sensory Sensor" repo. 
