
function fibonacci(n) {
    let fibonacciSequence = [];
    let a = 0, b = 1, nextTerm;
    
    while (fibonacciSequence.length < n) {
      fibonacciSequence.push(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
    
    return fibonacciSequence;
  }
  

  let termos = 20;
  let sequenciaFibonacci = fibonacci(termos);
  
  alert(`Os primeiros ${termos} números da sequência de Fibonacci são:`);
  alert(sequenciaFibonacci.join(', '));
  