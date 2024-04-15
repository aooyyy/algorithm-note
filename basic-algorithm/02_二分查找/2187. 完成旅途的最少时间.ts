function minimumTime(time: number[], totalTrips: number): number {
  //最少时间满足单调性，时间越大，越容易完成路途数目
  // 1. time的上下界确认
  const min = Math.min(...time);
  let l = min - 1;
  let r = min * totalTrips + 1;
  function check(targetTime) { // 看当前给定时间内能不能完成数目， 能--> true, 不能->false
    let total = 0;
    for(let i = 0; i< time.length; i++) {
        total+= Math.floor( targetTime / time[i]);
        if(total >= totalTrips) return true;
    }
    return false;
  } 
  while(l + 1 < r) {
    const mid = Math.floor((l + r) / 2);
    if(check(mid)) {
        r = mid;
    }else {
        l = mid;
    }
  }
  return r;
};