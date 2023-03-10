function heron(a, b, c) {
    let s = (a + b + c) / 2 ;
    let heron = Math.sqrt(s * (s-a) * (s-b) * (s-c))

    return heron;
  }

//holy shit I just did this in... 6 minutes with only one bug and no help and it worked! 