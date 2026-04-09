function startAutoTypeHumanized(targetKPM) {
    const input = $('#inputfield')[0];
    const ev = $.Event('keyup');
    ev.which = 32;

    const msPerKeystroke = 60000 / targetKPM;
    
    // Set a random typo quota between 1 and 5 for this session
    const targetTypos = Math.floor(Math.random() * 5) + 1;
    let typosMade = 0;

    function typeNextWord() {
        const highlight = $('.highlight');
        
        if (highlight.length > 0) {
            let word = highlight.text();
            
            // Typo logic: 5% chance of typo per word, until quota is met
            if (typosMade < targetTypos && Math.random() < 0.05) {
                // Create typo: replace the last character with 'x'
                word = word.slice(0, -1) + 'x';
                typosMade++;
                console.log(`[Log] Typo executed (${typosMade}/${targetTypos}) on word: ${highlight.text()} -> ${word}`);
            }
            
            input.focus();
            input.value = word;
            $(input).trigger(ev);

            const delay = msPerKeystroke * (word.length + 1);
            setTimeout(typeNextWord, delay);
        } else {
            setTimeout(typeNextWord, 500);
        }
    }

    console.log(`[System] Active. Target KPM: ${targetKPM}. Auto-typo quota: ${targetTypos} words.`);
    typeNextWord();
}

// Execution
startAutoTypeHumanized(100);