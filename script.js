function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    const selectedFont = document.getElementById('fontSelector').value; // Get the selected font

    if (noteText === '') {
        alert('Please write something before adding a note.');
        return;
    }

    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;
    noteContent.style.fontFamily = selectedFont; // Apply the selected font to the note


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        noteElement.remove();
    };

    noteElement.appendChild(noteContent);
    noteElement.appendChild(deleteBtn);

    document.getElementById('notes').appendChild(noteElement);

    document.getElementById('noteText').value = '';
}
// Function to dynamically populate the font selector
document.addEventListener('DOMContentLoaded', () => {
    const fontSelector = document.getElementById('fontSelector');
    const noteText = document.getElementById('noteText');

    // List of fonts
    const fonts = [
        'Arial',
        'Courier New',
        'Georgia',
        'Times New Roman',
        'Verdana',
        'Roboto',
        'Pacifico'
    ];

    // Populate the font selector dropdown
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelector.appendChild(option);
    });

    // Apply the selected font to the textarea
    fontSelector.addEventListener('change', () => {
        const selectedFont = fontSelector.value;
        noteText.style.fontFamily = selectedFont;
    });
});