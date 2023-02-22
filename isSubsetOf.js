const isSubsetOf = function (base, sample) {
    // newbase = base.sort((a,b)=>a-b)
    // newsample = sample.sort((a,b)=>a-b)
    
    // for(i=0; i<newsample.length; i++){
    //   for(j=0; j<newbase.length; j++){
    //   if(newbase[j]===sample[i]) newbase[j]
    //   if(!base.includes(sample[i])) return false;
    //   }
    // }
    // return true;
  
    if(sample.filter(x => base.includes(x)).length === sample.length) return true;
    else return false;
  
  };

  console.log(isSubsetOf([1, 2, 3, 4, 5],[1,3]))