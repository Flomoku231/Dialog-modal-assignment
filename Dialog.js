const openDialog= document.querySelector('#openDialog');
const dialog = document.querySelector('#favDialog');
const confirmResult = document.querySelector('#Confirm-Button');
const selectedItem = document.querySelector('select');
const cancelButton = document.querySelector('#Cancel-Button');

openDialog.addEventListener('click', function onOpen(){
    dialog.showModal();
});
cancelButton.addEventListener('click', function onOpen() {
    dialog.close();
})

const avatarFormElement = document.querySelector("#dialog-form");

function formSubmitted(event){
    const fileInput = avatarFormElement.querySelector("input[name=No-File]");
    const files = fileInput.files;
    if(files.length == 0 ) {
        alert("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImageToTheDOM(imageUrl);

}
function addImageToTheDOM(imageURL){
    const button = document.createElement("button");
    button.classList.add("dialogIcon");
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid fa-xmark fa-1x");
    closeIcon.name = "close-outline";

    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("dialogIcon-avatar2");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#openDialog");
    document.body.insertBefore(button, addAvatarButton);

}

avatarFormElement.addEventListener("submit", formSubmitted);