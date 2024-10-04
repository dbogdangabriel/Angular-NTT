let participants = [];

document.getElementById('addParticipant').addEventListener('click', function() {
    const participantName = document.getElementById('participantName').value.trim();
    if (participantName) {
        participants.push(participantName);
        updateParticipantList();
        document.getElementById('participantName').value = ''; // Clear input field
    }
});

document.getElementById('decideButton').addEventListener('click', function() {
    if (participants.length < 2) {
        alert('Please add at least 2 participants.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * participants.length);
    const chosenOne = participants[randomIndex];
    document.getElementById('result').textContent = `${chosenOne} will pay!`;
});

function updateParticipantList() {
    const listElement = document.getElementById('participantList');
    listElement.innerHTML = ''; // Clear the list
    participants.forEach(participant => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
        listElement.appendChild(listItem);
    });
}

// check the input label chars
document.getElementById('participantName').addEventListener('input', function (e) {
    // Only allow letters (both lowercase and uppercase) and spaces
    let input = e.target.value;
    e.target.value = input.replace(/[^a-zA-Z\s]/g, '');
  });