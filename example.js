function greetUser(name = "Guest", time = "day") {
    console.log(`Hello ${time}, ${name}!`);
}

greetUser();
greetUser("JavaScript", "morning");
greetUser("Developer", "evening");