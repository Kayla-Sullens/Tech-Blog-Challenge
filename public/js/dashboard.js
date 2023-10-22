const newBlogHandler = () => {};

const deleteButtonHandler = () => {};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newBlogHandler);
document
    .querySelector('.blog-list')
    .addEventListener('click', deleteButtonHandler);