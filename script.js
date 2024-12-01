function reveal_message() {
    document.getElementById("hidden_message").style.display = 'block';
}

function countdown() {
    var current_value = document.getElementById("countdown_button").innerHTML;
        if (current_value > 0) {
            new_value = current_value - 1;
        }
    document.getElementById("countdown_button").innerHTML = new_value;
}