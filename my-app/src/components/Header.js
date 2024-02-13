import React, { useState } from "react";

function Header(){
    const [elNav, setElNav] = useState(['ПРОДУКЦИЯ', 'НАШЕ ПРОИЗВОДСТВА','УГЛУГИ','ДОСТАВКА','КОНТАКТЫ']);
    const nav = elNav.map((el, ind)=>{
        return <a href="#1"><li key={ind}>{el}</li></a>
    })

    return <ul className="navUl">{nav}</ul>;
}
export default Header;
