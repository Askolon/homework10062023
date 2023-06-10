const handler = async() =>{
    const resp = await fetch('https://reqres.in/api/users/');
    const data = await resp.json();
    const users = data.data.map(({email, first_name, last_name, avatar}) =>({
        email, 
        first_name, 
        last_name, 
        avatar,
    }));
    for(let i = 0; i < users.length; i ++){
        render(users[i]);
    }
}


const rootElem = document.querySelector('#root');
function render(user){
const div = document.createElement('div');
const imgElem = document.createElement('img');
const pElem = document.createElement('p');
const aElem = document.createElement('a');

imgElem.src = user.avatar;
pElem.innerText = `${user.first_name} ${user.last_name}`;
aElem.href = user.email;
aElem.innerText = user.email;

div.append(imgElem, pElem, aElem);
rootElem.append(div);

}



handler();





// доработать getUser таким образом, чтобы он делал запрос по новой ссылку 
// и выводил в консоль массив из объектов
// у каждого объекта должны быть свойства id, first_name, last_name, avatar, email

// используя метод render отрисуйте данные каждого пользователя из массива users
    // из render уберите email