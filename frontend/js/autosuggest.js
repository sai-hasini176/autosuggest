function autosuggest() {
    //get user type data
    //use user type data in the query in the api call
    //API call
    //Append all the suuggestions in the div tag in UI
    var query = document.getElementById("searchbox").value;
    var suggestBox = document.getElementById("search-suggestions");
    if (query.trim() === "") {
        suggestBox.innerHTML = "";
        return;
    }
    fetch(`https://autosuggest-backend.onrender.com/api/autosuggest?q=${query}&weighted=true&algorithm=trie&limit=8`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        suggestBox.innerHTML = "";
        data.results.forEach(function(item) {
            var div = document.createElement("div");
            div.innerText = item.text;
            suggestBox.appendChild(div);
        });
    })
    .catch(function(err) {
        console.log("Error:", err);
    });
}
