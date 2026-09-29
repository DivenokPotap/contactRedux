import{a as e,d as t,l as n,o as r,s as i,u as a}from"./index-CC9LLXn_.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./index.esm-1MCMwY_s.js";var m={BTN:`_BTN_3bjlz_1`},h=e(),g=p().shape({name:l().min(2,`Закоротко!`).max(70,`Задовго!`).required(`Імʼя обовʼязковий!`),email:l().min(2,`Закоротко!`).max(70,`Задовго!`).required(`Пошта обовʼязковий!`),password:l().required(`пароль обовʼязковий!`)}),_=r(f)`
    display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto; 
  font-size: 20px;
  text-align: center;
`,v=r(u)`
   margin-left: 40px;
`,y=r(u)`
   margin-top: 10px;
   margin-left: 15px;
`,b=r(u)`
   margin-top: 10px;
   margin-left: 10px;
   margin-bottom: 20px;
`,x=()=>{let[e,{isLoading:r,isError:l}]=n(),u=t();return(0,h.jsx)(s,{initialValues:{name:``,email:``,password:``},onSubmit:async(t,{resetForm:n})=>{try{let r=await e(t).unwrap();a(r.token),u(i(r.token)),n()}catch{c.error(`Введіть дані`)}},validationSchema:g,children:(0,h.jsxs)(_,{children:[(0,h.jsx)(`h2`,{children:`Створити аккаунт`}),(0,h.jsxs)(`label`,{htmlFor:`name`,children:[`Імʼя`,(0,h.jsx)(v,{name:`name`,type:`text`}),(0,h.jsx)(o,{name:`name`,component:`div`})]}),(0,h.jsxs)(`label`,{htmlFor:`email`,children:[`Пошта`,(0,h.jsx)(y,{name:`email`,type:`text`}),(0,h.jsx)(o,{name:`email`,component:`div`})]}),(0,h.jsxs)(`label`,{htmlFor:`password`,children:[`Пароль`,(0,h.jsx)(b,{name:`password`,type:`password`}),(0,h.jsx)(o,{name:`password`,component:`div`})]}),(0,h.jsx)(`button`,{className:m.BTN,type:`submit`,children:`Ввійти`}),(0,h.jsx)(d,{})]})})};export{x as default};