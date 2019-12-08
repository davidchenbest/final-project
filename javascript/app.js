searchAttributes =[];
let counter =0;
code =document.querySelector('#code');
title =document.querySelector('#title');
instructor =document.querySelector('#instructor');
day =document.querySelector('#day');
availability =document.querySelector('#availability');
type =document.querySelector('#type');
searchButton =document.querySelector('#searchButton');
let start = document.querySelector('#start');

searchButton.onclick = function(){
  start.innerHTML=`<thead>
    <td>Code</td>
    <td>Title</td>
    <td>Instructor</td>
    <td>Day</td>
    <td>Availability</td>
    <td>Type</td>
  </thead>`;
  let api =`http://localhost:3000/courses/search?code=${code.value}&title=${title.value}&instructor=${instructor.value}&day=${day.value}&availability=${availability.value}&type=${type.value}`;
  console.log(api);
  fetch(api).then((response)=>{
    return response.json();
  })
  .then((data)=>{
    for(i=0; i<data.length;i++){
      start.innerHTML+=`<tr>
          <td>${data[i].code}</td>
          <td>${data[i].title}</td>
          <td>${data[i].instructor}</td>
          <td>${data[i].day}</td>
          <td>${data[i].availability}</td>
          <td>${data[i].type}</td>
      </tr>`;
    }
  })
};
