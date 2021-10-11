import './style.css';

const testBtn = document.createElement('button');
testBtn.textContent = 'Click Me';
testBtn.addEventListener('click',()=>{
    alert('Button clicked');
});

document.body.appendChild(testBtn);