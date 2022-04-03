class Dog {

}


try {
    const d = new Dog();
    console.log(d.eat());
} catch (err) {
    console.log(err);
} finally {
    console.log("Done");
}