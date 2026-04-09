# 10FastFingers Auto Typer

A minimalist, DOM-manipulation script to automate typing on 10FastFingers.com. 

## Features
- **Adjustable Speed**: Set your precise target Keystrokes Per Minute (KPM).
- **Dynamic Delay Calculation**: Pauses between words are calculated dynamically based on word length. This simulates organic typing rhythms and maintains a stable overall speed.
- **Seamless Injection**: Utilizes the site's native jQuery environment to dispatch keyboard events without triggering basic input blocks.

## Usage Instructions
1. Navigate to the [10FastFingers typing test](https://10fastfingers.com/).
2. Open your browser's Developer Tools (Press `F12` or `Ctrl + Shift + J`).
3. Go to the **Console** tab.
4. Copy the script and paste it into the console.
5. Modify the target KPM value at the bottom of the script if necessary (e.g., `startAutoType(100)`).
6. Press **Enter**.
7. Click the typing input field on the page or type the first letter manually to start the timer. The script will automatically take over until the test concludes.

## Disclaimer
Setting the KPM too high (typically above 120-150 KPM) will trigger the site's anti-cheat mechanisms and result in an end-of-test captcha. Maintain realistic speeds for optimal results. 

This script is provided strictly for educational purposes and DOM manipulation study.
