let count = 0;

function counter() {
  function update(value) {
    count += value;
    console.log("Count:", count);
  }

  function increment() {
    update(1);
  }

  function decrement() {
    update(-1);
  }

  return { increment, decrement };
}

const click = counter();

click.increment();
click.increment();
click.decrement();
click.increment();
