# Recipe Ideas Application

## Overview

The **Recipe Ideas** application is designed to help **Taylor**, a busy professional, quickly find meal recipes based on the ingredients they have, the time they have available to cook, and their preferences. Whether Taylor is looking for quick meals, meals with certain ingredients, or specific types of recipes, this application helps in providing personalized meal ideas and recipe instructions.

The application will interact with the **TheMealDB API** to fetch recipes based on user input. Taylor can input ingredients they have at hand, or their preferences, and get a list of suggested recipes along with detailed instructions.

## Features

- **Recipe Search by Ingredient**: Taylor can enter ingredients they have in their pantry, and the app will fetch recipes based on those ingredients.
- **Customizable Filters**: Taylor can filter recipes based on categories like "time to cook", "meal type" (e.g., vegetarian, vegan, chicken), or any other dietary preferences.
- **Quick Recipe Access**: The app will display quick recipes with preparation time for users who are short on time.
- **Personalized Recommendations**: The app will allow Taylor to specify what they are in the mood for (e.g., "comfort food" or "healthy"), and recommend recipes accordingly.

---

## User Persona

### Taylor: The Busy Professional

- **Name**: Taylor
- **Occupation**: Busy Professional
- **Goals**:
  - Wants quick, easy meal options that match what ingredients they already have.
  - Needs recipe suggestions based on mood, time, and available ingredients.
  - Sometimes has limited time to cook, so needs meals that take less than 30 minutes.

---

## Application Functionality

The app will consist of the following features:

### 1. **Recipe Search by Ingredient**
- **Input**: User (Taylor) will enter a specific ingredient (e.g., chicken, tomato, pasta).
- **Output**: A list of recipes containing that ingredient from the **TheMealDB API**.

### 2. **Filters for Time and Meal Type**
- **Input**: User can filter recipes based on the following options:
  - **Time**: How much time Taylor has to cook (e.g., 30 minutes or less).
  - **Meal Type**: Type of meal (e.g., breakfast, lunch, dinner).
  - **Dietary Preferences**: Options like vegetarian, low-carb, or high-protein.

### 3. **Personalized Recipe Suggestions**
- **Input**: User can indicate what they feel like eating (e.g., comfort food, light salad).
- **Output**: A list of recipes that match the mood.

---

## API to Use

We will be using the **TheMealDB API** to fetch meal recipes. The API provides a variety of meal-related data, and we'll specifically use the `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}` endpoint to fetch recipes based on ingredients.



