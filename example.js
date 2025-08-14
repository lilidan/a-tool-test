function greetUser(name = "World", time = "day") {
    console.log(`Good ${time}, ${name}!`);
}

greetUser();
greetUser("JavaScript", "morning");
greetUser("Developer", "evening");