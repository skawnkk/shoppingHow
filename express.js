const express = require("express");
const server = express();
server.use(express.static("public"))
server.get("/", (req, res) => {
   res.render(index.html);
})

server.listen(3000, (err) => {
   if (err) return console.log("err");
   console.log("the server is listening on port 3000");
});




//?Express환경구축
//npm install express
//npm init -y
//npm install nodemon
//npm install express-handlebars

//?Express실행
//npm run dev (package.json_dev내용확인)

//?sass환경구축
//*parcel
/*
:쉽고 빠르고 별도의 새로고침없이 변경내용이 업데이트 되어 결과물을 확인하기는 편했다.
그렇지만 server와 연동이 되지않아 애를 먹었고 node-sass로 환경설정을 다시 하게되었다.
parcel build index.htm

//*node-sass
1. npm install - g node - sass
2. node-sass public/style.scss public/style.css 
   (입력,출력경로)
   => scss를 컴파일 하여 css로 바꾸어주었다.
   (비어있던 css파일에 내용이 생성되었음)
   layout.hbs의 style링크연결을 scss => css로 바꾸어줌.
3. node-sass --watch public/style.scss public/style.css
  scss의 변경내용을 자동으로 컴파일 시켜준다.*/