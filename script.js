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
btn.style.borderRadius = '10px';
// btn.style.border = 'none';
btn.style.borderColor = '#4BB977';


// How to create an object in js
const client = {
    person: 'Juan',
    balance: 2000,
    membership : function() {
           let name;
           // Check different Balance
           if(this.balance > 1000) {
              name = 'Gold';
           } else if(this.saldo > 500) {
              name = 'Platinum';
           } else {
              name  = 'Normal';
           }
           return name;
    }
 }
 console.log(client);
//  console.log(client.name);
//  console.log(client.balance);
//  console.log(client.membership() );