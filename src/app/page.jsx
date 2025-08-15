import Image from 'next/image';

import styles from './page.module.css';


      export default function Home(){
        return(
          <div className="container">
          <h1 className={styles.tituloHome}>Título 1</h1>
          <h2>Título 2</h2>
          <h3>Título 3</h3>
          <p className="txtDestaque">Primeiro exemplo no Next</p>
          <small>texto menor</small>
            <br />
          <div className="quadrado"></div>


            <Image 
            src={'/temp/arvore.jpg'}
            alt="Árvore"
            width={130}
            height={90}
            />

            <Image
            src={'/temp/arvorePequena.jpg'}
            alt="Árvore pequena"
            width={1300}
            height={900}/>
          </div>
          
          
        );
      }

   