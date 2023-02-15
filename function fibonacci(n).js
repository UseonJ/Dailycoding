function fibonacci(n) {
    //0 1 1 2 3 ...
    // O(N) 은 대략 n번 호출인데
    if(n<=1) return n;
    if (typeof(num)==='undefined') { var num = 2; }
    const memory = [0,1]
    const a = (num = 2) => {
      memory[num] = memory[num-1] + memory[num-2]
      if(num<n){
        num = num + 1;
        return a(num)
      }
      return memory[n]
    }
    if(num===2) a(num)
    
    // if(num<=n) {
    //     num = num + 1;
    //     return a(num) // 전역으로 빠져나와버리나? 접근을 못하나..?
    // }
    return memory[n]
  }

  console.log(fibonacci(10));


  // 상은쓰 메모리제이션

  function fibonacci(n) {
    if(n<=1) return n;

    if (!fibonacci(n)) fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);

    return fibonacci[n];

  }
    