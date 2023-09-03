let page_number = 1; // always use defer in the script tag in the html file or else it may cause errors.

let page = document.getElementById('pageNo');
let orderedList = document.getElementById("issues");

page.innerHTML = page_number;


function getIssues(page_number){
    let gitURL = `https://api.github.com/repositories/1296269/issues?page=${page_number}&per_page=5` ;

    fetch(gitURL, {method : "GET"})
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // orderedList.append(listItem.innerHTML = data[2].title)
        orderedList.innerHTML = '';
        data.forEach(each => {
            page.innerHTML = `PAGE NUMBER ${page_number}`;
            let listItem = document.createElement('li');
            listItem.innerText = each.title;
            document.getElementById('issues').append(listItem);
            // console.log(document.getElementById("issues"));
        })
    })
}

getIssues(page_number)

// 
next = () => {
    page_number ++ ;
    // page.innerHTML = page_number;
    getIssues(page_number)
}


prev = () => {
   if(page_number > 1){
    page_number -- ;
    // page.innerHTML = page_number;
    getIssues(page_number)
   }
}

