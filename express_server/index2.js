async function sendAddRequest() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById("result").innerHTML = "<b>" + data.answer + "</b>";
}



async function sendSubtractRequest() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const response = await fetch('http://localhost:3000/subtract', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById("result").innerHTML = "<b>" + data.answer + "</b>";
}

async function sendMultiplyRequest() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const response = await fetch('http://localhost:3000/multiply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById("result").innerHTML = "<b>" + data.answer + "</b>";
}

async function sendDivideRequest() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const response = await fetch('http://localhost:3000/divide', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById("result").innerHTML = "<b>" + data.answer + "</b>";
}