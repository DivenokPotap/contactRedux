import{a as e,c as t,d as n,o as r,p as i,s as a,u as o}from"./index-Dsn9nHva.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./index.esm-DywmCz7C.js";var h={BTN:`_BTN_3bjlz_1`},g=e(),_=m().shape({email:u().min(2,`Закоротко!`).max(70,`Задовго!`).required(`Пошта обовʼязкова!`),password:u().required(`Пароль обовʼязковий!`)}),v=r(p)`
    display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto; 
  font-size: 20px;
  text-align: center;
`,y=r(d)`
   margin-left: 40px;
`,b=r(d)`
   margin-top: 20px;
   margin-left: 35px;
   margin-bottom: 20px;
`,x=r(i)`
   margin-top: 20px;
`,S=()=>{let[e,{isLoading:r,isError:i}]=t(),u=n();return(0,g.jsx)(`div`,{children:(0,g.jsx)(c,{initialValues:{email:``,password:``},onSubmit:async(t,{resetForm:n})=>{try{let r=await e(t).unwrap();o(r.token),u(a(r.token)),n()}catch{l.error(`Введіть дані`)}},validationSchema:_,children:(0,g.jsxs)(v,{children:[(0,g.jsx)(`h2`,{children:`Ввійти в аккаунт`}),(0,g.jsxs)(`label`,{htmlFor:`email`,children:[`Пошта`,(0,g.jsx)(y,{name:`email`,type:`text`}),(0,g.jsx)(s,{name:`email`,component:`div`})]}),(0,g.jsxs)(`label`,{htmlFor:`password`,children:[`Пароль`,(0,g.jsx)(b,{name:`password`,type:`password`}),(0,g.jsx)(s,{name:`password`,component:`div`})]}),(0,g.jsx)(`button`,{className:h.BTN,type:`submit`,children:`Ввійти`}),(0,g.jsx)(f,{}),(0,g.jsx)(x,{to:`/register`,children:`Do not have an account yet?`})]})})})};export{S as default};