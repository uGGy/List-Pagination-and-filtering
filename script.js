/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Var stocking the list of student

const studentList = document.querySelectorAll(".student-item");

// Var stocking the indexes

let startIndex = 0;
let endIndex = 9;

// Function showPage using Tenary Operator

function showPage(list, page) {

  page >=  1 ?  (endIndex = 9 + ((page - 1) * 10), 
  startIndex =  0 + ((page - 1) * 10)) : (endIndex, startIndex);


  // Loop passing through the student list displaying 10 items per page and hidding the rest
  list = studentList;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}


//  Function to generate and append links & functionality to the pagination buttons.

function appendPageLinks(list) {


  list = studentList;
  let currentPage = 1;
  const NumberOfPage = (Math.ceil(studentList.length / 10));

  // Positioning the button in a ul element, which will contain the button at the bottom of the page

  let divPagination = document.createElement('div');
  divPagination.classList.add("pagination");
  let divPage = document.querySelector(".page");
  divPage.appendChild(divPagination);

  let ul = document.createElement('ul');
  divPagination.appendChild(ul);

  let li = document.createElement('li');
  ul.appendChild(li);


 // Loop passing through the number of pages and creating one button for each page

  for (let i = 1; i < NumberOfPage + 1; i++) {
    let a = document.createElement('a');
    a.setAttribute("href", "#");
    a.innerText = i;
    li.appendChild(a);

    // Adds class 'ative' list to the first page

    if (parseInt(a.innerText) === currentPage) {
      a.classList.add('active');
    }

    // Event listener that display the list of when the button link/button is clicked
  
    a.addEventListener('click', (event) => {

      let links = document.querySelectorAll('a');
      let currentPage = parseInt(event.target.innerText);

      // Loop passing through each page, the class 'active' is added to the current page and remove from the others

      for (let x = 0; x < links.length; x++) {
        const pages = links[x];
        let linkNumber = parseInt(pages.innerText);

        if (linkNumber === currentPage) {
          pages.setAttribute('class', 'activate');
        } else {
          pages.removeAttribute('class');

        }
      }
      // Function that displays the list per page is called
      showPage(studentList, currentPage);

    });
  }

  // Function that displays/hides the list of items per page is called

  showPage(studentList, currentPage);

}

//Function to generate and append links & functionality to the pagination buttons is called to activate it
appendPageLinks(studentList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
