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
    if(num===2) a(num) // num 2일 때 a 선언만하고 실행을 안해서 강제실행
    
    return memory[n]
  }

  console.log(fibonacci(10))

  //나 진짜 이상하게 풀었네...
  // 

//reference
// let fibonacci = function (n) {
//   const memo = [0, 1];
//   const aux = (n) => {
//     // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
//     if (memo[n] !== undefined) return memo[n];
//     // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
//     memo[n] = aux(n - 1) + aux(n - 2);
//     return memo[n];
//   };
//   return aux(n);
// }; 



  // 상은쓰 메모리제이션

  // function fibonacci(n) {
  //   if(n<=1) return n;

  //   if (!fibonacci(n)) fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);

  //   return fibonacci[n];

  // }
    