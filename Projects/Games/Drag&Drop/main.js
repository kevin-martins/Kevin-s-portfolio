const img = document.querySelector('.img');
const imgBox = document.querySelector('.GetImage');
const boxes = document.querySelectorAll('.DropImage');
const content = document.querySelector('.ContentBox');

//#region Setters

//Set Event to image
img.addEventListener('dragstart', dragStart);
img.addEventListener('dragend', dragEnd);

//Set Event to Image Getter
imgBox.addEventListener('dragover', dragOver);
imgBox.addEventListener('dragenter', originDragEnter);
imgBox.addEventListener('dragleave', originDragLeave);
imgBox.addEventListener('drop', originDrop);

//Set Event to Boxes
for(const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
}

//#endregion

//#region Function for Origin Box Image

//Target the Event while Drag is in
function originDragEnter(event) {
    event.preventDefault();
    this.classList.add('SetOrangeBorder');
    this.classList.add('SetDashedBorder');
    this.classList.add('SetScale');
    this.classList.remove('SetDefaultScale');
}

//Target Event while is out
function originDragLeave() {
    this.classList.remove('SetScale');
    this.classList.add('SetDefaultScale');
}

//Target Event when drop
function originDrop() {
    this.classList.remove('SetOrangeBorder');
    this.classList.remove('SetDashedBorder');
    this.classList.remove('SetScale');
    this.classList.add('SetDefaultScale');
    this.append(img);
}

//#endregion

//#region IMAGE EVENT

//Called once on the Start of a Drag
function dragStart() {
    setTimeout(() => (this.classList.add('hide')), 0);
}

//Called once on the End of a Drag ()
function dragEnd() {
    this.classList.remove('hide');
    if (this.parentElement.classList.contains('GetImage')) {
        scaleAnimation();
    }
}

function scaleAnimation() {
    imgBox.classList.remove('SetDefaultScale');
    imgBox.classList.remove('SetDashedBorder');
    setTimeout(function(){ imgBox.classList.add('SetScale'); }, 0);
    setTimeout(function(){ imgBox.classList.add('SetDefaultScale'); }, 400);
}

//#endregion

//#region BOXES WHICH RECEIVE THE IMAGE

//Event Fired on a drop target
function dragOver(event) {
    event.preventDefault();
}

//Event Fired while INSIDE a drop object
function dragEnter(event) {
    event.preventDefault();
    this.classList.add('SetDashedBorder', 'SetScale');
    this.classList.remove('SetSolidBorder', 'SetDefaultScale');
    this.parentElement.classList.remove('ValidBox');
    this.parentElement.classList.add('ContentBox');
}

//Event Fired while OUT of a drop object
function dragLeave() {
    this.classList.add('SetDefaultScale');
    this.classList.remove('SetScale', 'SetDashedBorder');
}

// When let the object on an element
function drop() {
    this.classList.remove('SetDashedBorder');
    this.classList.add('SetSolidBorder');
    this.parentElement.classList.add('ValidBox');
    this.parentElement.classList.remove('ContentBox');
    this.append(img);
}

//#endregion