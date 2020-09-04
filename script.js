/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentList = document.querySelectorAll(".student-item");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
let startIndex = 0;
let endIndex = 9;


function showPage(list, page) {
   page >=  1 ?  (endIndex = 9 + ((page - 1) * 10), 
  startIndex =  0 + ((page - 1) * 10)) : (endIndex, startIndex);
   
      list = studentList;
      for (let i = 0; i < list.length; i ++) {
         if (i >= startIndex && i <= endIndex) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
}




// /*** 
//    Create the `appendPageLinks function` to generate, append, and add 
//    functionality to the pagination buttons.
// ***/

function appendPageLinks (list) {
   /*
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page
   2. Create a div, give it the “pagination” class, and append it to the .page div
   3. Add a ul to the “pagination” div to store the pagination links
   4. for every page, add li and a tags with the page number text
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */

   list = studentList;
   let currentPage = 1;
  const NumberOfPage = (Math.ceil(studentList.length / 10));


   let divPagination = document.createElement('div');
   divPagination.classList.add("pagination");
   let divPage = document.querySelector(".page");
   divPage.appendChild(divPagination);

   let ul = document.createElement('ul');
   divPagination.appendChild(ul); 


   let li = document.createElement('li');
    ul.appendChild(li);

      for (let i = 1; i < NumberOfPage +1; i++) {
         let a = document.createElement('a');
         a.setAttribute("href", "#");
         a.innerText = i;
         li.appendChild(a);

            if (parseInt(a.innerText) === currentPage){
             a.classList.add('active');
             }
               
               a.addEventListener('click', (event) => {
                  let links = document.querySelectorAll('a');
                  let currentPage = parseInt(event.target.innerText);
                  


                  for (let x = 0; x < links.length ; x++) {
                     const pages = links[x];
                     let linkNumber = parseInt(pages.innerText);

                     if (linkNumber === currentPage){
                        pages.setAttribute('class','activate');
                     } else {
                        pages.removeAttribute('class');

                     }
                  }
                  showPage(studentList, currentPage);

               });                 
            } 
            showPage(studentList, currentPage);

      } 

appendPageLinks(studentList);
// Remember to delete the comments that came with this file, and replace them with your own code comments.
