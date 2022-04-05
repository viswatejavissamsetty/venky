window.onload = function () {
    console.log("Hello");
    // const h1Tag = document.getElementsByTagName('h1');
    // for (const h1 of h1Tag){
    //     h1.innerText = "Hello World";
    // }

    // const customH1 = document.getElementById('custom-h1');
    // // customH1.innerText = 'Hello <i>World</i>'
    // customH1.innerHTML = 'Hello <i>World</i>';
    // customH1.style.background = 'red';
    // customH1.style.color = 'blue';
    // customH1.id = 'custom-manuplated-id';
    // customH1.classList.add("class1", "class2", "class3");
    // customH1.classList.remove("class2");
    // customH1.classList.replace("class3", "class3-1");
    // customH1.classList.toggle("class2");

    // setTimeout(()=>{
    //     const id2 = document.getElementById("id-2");
    //     id2.style.color = 'green';
    //     id2.style.background = 'gray';
    // }, 4000)

    // const inner = document.getElementsByClassName("inner");
    // for(let inn of inner) {
    //     inn.innerHTML = 'Hello World';
    //     inn.style.background = 'red';
    // }

    // const innerActive = document.querySelector('.inner.active');
    // const innerActive = document.querySelectorAll('.inner.active');
    // innerActive.innerHTML = 'Hello Venky';
    // const list = document.getElementById("list");
    // console.log(list);

    // var i = 0;
    // setInterval(()=>{
    //     const newElement = document.createElement('div');
    //     newElement.innerText = 'List ' + i;
    //     list.appendChild(newElement);
    //     i++;
    // }, 1000);

    document.getElementById("new-tab").onclick = (event) => {
        event.preventDefault();
        if(event.altKey){
            window.open(event.target.href, '_blank');
        }
        console.log(event);
    }

    document.getElementById("new-tab").ondblclick = (event) => {
        console.log("Double clicked");
    }

}


function handleButtonClick() {
    const previousText = document.getElementById("custom-h1").innerText;
    document.getElementById("custom-h1").innerText = "Button Clicked";
    setTimeout(() => {
        document.getElementById("custom-h1").innerText = previousText;
        window.open('https://www.google.com', '_blank');
    }, 5000);
}
