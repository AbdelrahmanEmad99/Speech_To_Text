// Event listener for the click event on the 'click_to_convert' element
click_to_convert.addEventListener('click', function () {

    // Variable to toggle speech recognition
    var speech = true;

    // Check if the SpeechRecognition API is supported and assign it to the window object
    window.SpeechRecognition = window.webkitSpeechRecognition;

    // Create a new instance of SpeechRecognition
    const recognition = new SpeechRecognition();

    // Set interimResults to true to receive interim results while speech recognition is in progress
    recognition.interimResults = true;

    // Event listener for the 'result' event, which is triggered when speech recognition detects speech
    recognition.addEventListener('result', e => {

        // Convert the list of speech recognition results into an array and extract the transcript
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript);

        // Display the transcript on the page (convert_text.innerHTML)
        convert_text.innerHTML = transcript;
    });

    // Start speech recognition if the 'speech' variable is set to true
    if (speech == true) {
        recognition.start();
    }
});
