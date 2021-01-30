var el = document.getElementById('btn');

el.addEventListener('click', saySomeThing);


function saySomeThing(){
    // document.body.style.backgroundColor = 'blue';
    var cls = this.innerHTML.toLowerCase();
    document.body.className = cls;
}