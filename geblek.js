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