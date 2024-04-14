function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  //找到能匹配成功的上界
  potions.sort((a, b) => a - b);
  function check(num, target){
      if(num * target < success) {
          return true;
      }
      return false;
  }
  function lowerBound(target) {
      let l = -1;
      let r = potions.length;
      while(l + 1 < r) {
          const mid = l + r >>1;
          if(check(potions[mid], target)) {
              l = mid
          } else {
              r = mid;
          }
      }
      return r;
  }
  const result = spells.map(item => {
      const index = lowerBound(item);
      let ans = 0;
      if(index !== potions.length) {
          ans = potions.length - index;
      }
      return ans;
  })
  return result;

};