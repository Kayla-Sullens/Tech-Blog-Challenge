const elNewBlogForm = document.querySelector('.new-blog-form');
const elBlogList = document.querySelector('.blog-list');

const newBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const date_created = document.querySelector('#blog-date').value.trim();
    const contents = document.querySelector('#blog-content').value.trim();

    if (title && date_created && contents) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, date_created, contents }),
            headers: { 'Content-Type': 'application.json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog.');
        }
    }
};

const deleteButtonHandler = async (event) => { 
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

elNewBlogForm.addEventListener('submit', newBlogHandler);

if (elBlogList) {
    document.addEventListener('click', deleteButtonHandler);
}

