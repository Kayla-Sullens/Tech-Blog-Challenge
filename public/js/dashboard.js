const elNewBlogForm = document.querySelector('.new-blog-form');
const elBlogList = document.querySelector('.blog-list');

const newBlogHandler = () => {};

const deleteButtonHandler = () => {};

elNewBlogForm.addEventListener('submit', newBlogHandler);

if(elBlogList) {
    document.addEventListener('click', deleteButtonHandler);
}
 
