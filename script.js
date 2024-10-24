document.getElementById('countBtn').addEventListener('click', function() {
    const wordsInput = document.getElementById('words').value;
    const charInput = document.getElementById('char').value;

    // Get words as an array
    const wordsArray = wordsInput.split(',').map(word => word.trim());
    const char = charInput.trim();

    // Clear previous results
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    if (char.length !== 1) {
        alert('Please enter a single character!');
        return;
    }

    // Function to count character frequency
    function characterFrequency(arr, char) {
        return arr.map(str => {
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            return count;
        });
    }

    // Get frequency count
    const result = characterFrequency(wordsArray, char);

    // Display results
    result.forEach((count, index) => {
        const li = document.createElement('li');
        li.textContent = `In "${wordsArray[index]}", "${char}" appears ${count} times.`;
        resultsList.appendChild(li);
    });
});
