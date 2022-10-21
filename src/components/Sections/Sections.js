import React from 'react';
import s from './sections.module.css'


 function Sections({title, children}) {
  return (
    <section className={s.container}>
          <h1>{title}</h1>
          {children}
    </section>
  );
}


export default Sections