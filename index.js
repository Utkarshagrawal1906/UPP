console.log("This Is my index js file");
// 8c2c244b3a78401782d6758c765cb7ec(API KEY MENTION KARI HAI TAKI KABHI USE KARNA HO TOH KAR SAKE)
//VARIABLE INITIALIZATION
let source = 'bbc-news';//SOURCE FOR JUST BBC NEWS MENTIONS LATER CAN BE CHANGED AFTER DISCUSSION
let apikey = '8c2c244b3a78401782d6758c765cb7ec'//API KEY STORED AND CAN BE CHANGED FROM HERE ONLY
let newsAccordian = document.getElementById('newsaccordian');//Mentioned The id here in news container

//GET REQUEST
const xhr = new XMLHttpRequest();//HTTPS REQUEST MADE
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);//GET REQUEST AND URL ABHI CORRECT KARNA HAI JUST TEST FOR BBC-NEWS
//FUNCTION THAT WORKS FOR LOADING
xhr.onload = function () {
    if (this.status === 200) {
        let json=JSON.parse(this.responseText);//RESPONSE STORED IN VARIABLE
        let articles = json.articles;//ARTICLES STORED IN VARIABLE
        console.log(articles); //FOR TESTING PURPOSE
        let newsHtml="";
        articles.forEach(function(element,index) {  
           // console.log(element,index)//FOR TESTING PURPOSE   
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${element["title"]}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsaccordian">
                            <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read More</a> </div>   
                        </div>
                        </div>`;
            newsHtml += news;            
        });
        newsAccordian.innerHTML = newsHtml;//AB SAARI NEWS PUT HO GAYI HAI INNER HTML MAI
    }
    else {
        console.log("Some error occured")  //YEAH KABHI NAHI AANA CHAIYE
    }
}

xhr.send()//REQUEST SEND TO FETCH
