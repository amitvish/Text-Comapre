document.getElementById("compareButton").addEventListener("click", function() {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    // Simple text comparison: Check if texts are equal
    if (text1 === text2) {
        document.getElementById("result").innerHTML = "Texts are identical.";
    } else {
        document.getElementById("result").innerHTML = "Texts are different.";
    }
});

// Function to resize textarea based on content
function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto'; // Reset height to recalculate
    textarea.style.height = textarea.scrollHeight + 'px'; // Set new height
}

// Event listeners for textareas
document.getElementById("text1").addEventListener('input', function() {
    autoResizeTextarea(this);
});

document.getElementById("text2").addEventListener('input', function() {
    autoResizeTextarea(this);
});