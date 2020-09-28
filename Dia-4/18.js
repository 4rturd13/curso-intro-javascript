const name = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
name.push(prompt("Insert name"));
name[2] = prompt("Insert new name");
name.forEach((e) => console.log(e));
