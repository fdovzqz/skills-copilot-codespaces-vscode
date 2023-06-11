function skillMemeber() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "1") {
        document.getElementById("skillMember").style.display = "block";
        document.getElementById("skillMember").innerHTML = "Member: " + memberText;
    } else {
        document.getElementById("skillMember").style.display = "none";
    }
} 