# FLATTEN ARRAY

```javascipt
    var flat = (arr)=>arr.reduce((r,a)=>Array.isArray(a)?[...r,...flat(a)]:[...r,a],[]);
    console.log(flat([[8,9],7,[1],[8],[]]));
    console.log(flat([{f:7},{a:6},[4,2,{}]]));
```

# file uploader
  install steps: 
  1)npm i 
  2)npm start
  
  
  
  technologies:
  1)react
  2)isomorphic/universal app
