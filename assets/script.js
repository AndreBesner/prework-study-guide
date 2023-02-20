/*
Simple JavaScript code to help randomly select a topic to study
Feb20,23
Andre Besner
*/

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];                      //Declares array var with study guide topics

var randomTopic = topics[Math.floor(Math.random() * topics.length)];    //Math function to generate random topic to study

function listTopics(){                                                  //Function to print values of topics array
    for(var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic(){                                                 //Function to select a topic
    if(randomTopic === "HTML"){
        console.log("Let's study HTML!");
    } else if(randomTopic === "CSS"){
        console.log("Let's study CSS!");
    } else if(randomTopic === "Git"){
        console.log("Let's study Git!");
    } else if(randomTopic === "JavaScript"){
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log("Here are the topics we learned through pre-work!");         //Lists topics
listTopics();

console.log("What subject should we study first?");                      //Outputs randomly selected topic
selectTopic();
