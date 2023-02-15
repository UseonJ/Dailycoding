const largestProductOfThree = function (arr) {
    // sort 절댓값으로 분류해서
    // 가장 큰 숫자부터 곱하도록 하고(근데 이 로직은 어케 구현?)
    // 음수가 나오면 다시 하고 양수가 나오면 리턴하고 끝
    let result = [];
    arr.sort((a,b)=> Math.abs(b)-Math.abs(a)) //정렬됨
    // [-16,15,14,-13, ...] > 음수가 3숫자중 2개거나 없으면 통과 아니면 다음으로 큰 수 
    // 효율 고려 안하면 삼중반복문(또는 재귀..?)로 모든 경우의 수 뽑고 > 절댓값분류가 의미가없네 이건..
    // 아니면 음수가 포함된 경우와 음수가 1개 또는 없는 경우로 나누면 편함.(적어도 한쪽은 편함)
    //잠깐만.. 근데 3중반복문 로직자체가 문제있네;; > 왜 undefined인지만 보고 다른걸로
    
    let j=1;
    for(i=0; i!==j; i++){
        if(i===j){
            break;
        }
        for (j=i+1; j<arr.length; i++){
            
            for (k=j+1; k<arr.length;){ 
                console.log(arr[i]*arr[j]*arr[k])
                if(arr[i]*arr[j]*arr[k]>0) {
                    result.push(arr[i]*arr[j]*arr[k])                    
                }
                if(k!==arr.length-1){
                    k += 1;
                }                
            }
            //k 작업 끝나고 j 증가
            if(j<arr.length){
                j += 1;
                if(j===k){
                break;
                }
        }
        }
    }
    // 오케이 간단한 이유였고.. 폐기 ㅋㅋ 하지말고 다시 가져와바
    console.log(result)
    // 원시적인 방법으로는 3중반복문 돌려서 모든 결과값을 절댓값으로 다시 줄세워서 앞에서부터 양수인지 판별하고 양수이면 리턴하면 된다..
    // 너무 원시적으로 해서 ㅋㅋㅋ 너무 어렵다

    result.sort((a,b)=> b-a)
    for (el in result){
        if(el>0) return el;
    }

  };

  console.log(largestProductOfThree([-1, 2, -5, 7]))

// 
//  1*2 (*3 *4 *5 ...)  i < n-2
//  1*3                   j =  < n-1
//  1*4                   k < n
  
let result = []

for(i=0; i<arr.length-2; i++){
    for(j=i+1; j<arr.length-1; j++){
        for(k=j+1; k<arr.length; k++){
            result.push(arr[i]*arr[j]*arr[k]) 
        }
    }
}

return result.sort((a,b)=> b-a)[0]
