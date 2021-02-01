var el = document.getElementById('btn');

el.addEventListener('click', saySomeThing);

function saySomeThing(){
    // document.body.style.backgroundColor = 'blue';
    var cls = this.innerHTML.toLowerCase();
    document.body.className = cls;
}
document.body.addEventListener('click', function(){
    // document.body.innerHTML = ' ';
})

// button
var btn = document.getElementById('btn');
btn.style.color = 'red';
btn.style.padding = '10px 40px';
// btn.style.border = 'none';
btn.style.borderColor = '#4BB977';