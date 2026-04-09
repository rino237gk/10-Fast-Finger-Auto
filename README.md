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

```javascript
function startAutoType(targetKPM) {
    const input = $('#inputfield')[0];
    const ev = $.Event('keyup');
    ev.which = 32; // Spacebar keycode

    // Convert KPM (Keystrokes Per Minute) to milliseconds per keystroke
    const msPerKeystroke = 60000 / targetKPM;

    function typeNextWord() {
        const highlight = $('.highlight');
        
        if (highlight.length > 0) {
            const word = highlight.text();
            
            // Execute input injection 
            input.focus();
            input.value = word;
            $(input).trigger(ev);

            // Calculate dynamic delay based on word length for stable speed
            const delay = msPerKeystroke * (word.length + 1);
            setTimeout(typeNextWord, delay);
        } else {
            // Idle loop: wait if the test hasn't started yet
            setTimeout(typeNextWord, 500);
        }
    }

    console.log(`[System] Auto-type initialized. Target speed: ${targetKPM} KPM...`);
    typeNextWord();
}

// Execution: Replace 100 with your target KPM (Max 120 recommended to avoid Captcha)
startAutoType(100);
