"use client";
export default function Cie() {
  return (
    <div
      className="top-0  w-screen min-h-screen  bg-white grid grid-flow-row gap-4
     ">
      <div className="   w-screen row-span-2">
        <div className="max-h-96">
          <img
            src="/cie_bg.png"
            alt="Dance Company"
            className="place-self-start  w-screen object-cover h-96 "
          />
          <div className="absolute top-72 grid items-stretch content-stretch justify-stretch">
            <div>
              <h1 className="   text-5xl font-bold bottom-0">CREATIONS</h1>
            </div>
            
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  grid-flow-row  justify-center content-center text-sm max-w-4xl">
        <nav className="grid grid-flow-col gap-4 justify-between mx-10 font-light">
          <a href="/creations" className="text-xs lg:text-sm w-20 ">#1 Nicera</a>
          
        </nav>
        <div className="p-4 lg:p-10 text-sm text-black row-span-1  grid content-start md:grid-cols-5 w-full lg:m-10">
            {/* <h1 className="md: col-span-5 text-4xl text-black mt-8 mb-10 font-extrabold underline text-right">NICERA</h1> */}
            <div className=" md:col-span-3  pr-40 w-auto  h-8 mb-10  text-xs grid  content-center justify-center text-black text-left place-self-start border-b-2 border-gray-500">
              <p>
                Piece chorégraphique pour 3 a 5 danseurs <b>EN COURS</b>
              </p>
            </div>
            
          <p className="md:col-span-3 text-4xl lg:text-5xl font-bold uppercase">Lignes <br /> 
            <b className="text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500"> d'histoires</b> <br />
            inscrites <br /><i className="font-bold text-xl">dans chaque articulation,</i> 
           </p>
          <i className="md:col-span-2 mr-4">le passé prend
          forme, danse silencieuse en résonance, Mémoire sculptée dans chaque
          muscle et expression, Le corps devient le théâtre où s'anime cette
          danse. Chaque pas, une trajectoire, chaque geste, une partition, Les
          souvenirs s'animent, tissant une chorégraphie commune, Les rythmes et
          les émotions s'enlacent, Dans la fluidité des mouvements, l'histoire
          se dévoile.</i>
        </div>
        <div className="row-span-1 lg:col-span-4 my-10"> </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5  justify-center content-center text-sm bg-black text-white">
        <div className="grid col-span-1 md:col-span-5 mt-10 ">
          <h1 className=" text-2xl col-span-1 md:col-span-5 font-bold ">
            PROPOS ARTISTIQUE
          </h1>
        </div>
        <div className="p-10 col-span-1  md:col-span-2 grid grid-flow-row content-start">
          <p>
            Le point de départ de NICERA est basé sur la recherche de la mémoire
            transgénérationnelle comme une façon d'interroger et de déterminer
            mes racines, mon identité et mon corps. Ses racines se sont établies
            dans le temps. Ce qui nous intéressera, c'est le chemin, les étapes
            et les doutes communs à chacun ; prendre conscience de l'influence
            d'une époque que l'on n'a pas connue et lui laisser une place.
            L'image de l'arbre fera corps avec les interprètes, il sera le
            témoin de l'histoire. C'est pour cette raison qu'il nous permet
            d'explorer et de traduire leurs parcours. C’est une performance qui
            explore la mémoire corporelle à l'aide d'un arbre et de ses racines.
            <br /> <br /> " Une pièce de danse contemporaine qui nous invite a
            nous interroger sur notre propre memoire, l’espace et le mouvement
            en relation avec nos origines." Notre démarche artistique se
            concentre sur la creation de spectacles innovants et accessibles à
            un public large. Nous croyons en l'importance de faire découvrir la
            danse et l'art en général à tous les publics, y compris ceux qui
            n'ont pas l'habitude de fréquenter les théâtres. Nous sommes
            également passionnés par l'expérimentation et l'innovation dans la
            danse et souhaitons continuer à explorer de nouvelles façons de
            travailler les sujets introspectifs pour revoir les principes de
            création dans ce domaine.
            <br />
            Notre objectif est de créer des moments qui donnent une expérience
            unique et marquante aux spectateurs.
          </p>
        </div>
        <div className="p-10  col-span-1 md:col-span-2 grid  grid-flow-row content-start">
          <p>
            NICERA puise dans ma propre histoire familiale, liée à mon
            grand-père, ainsi que dans la symbolique de l'arbre. Mes amis me
            reconnaissent par mon enracinement au sol lors de mes mouvements.
            Cette exploration se déploie à travers différentes caractéristiques
            physiques et partages entre l'homme et l'arbre. Ces recherches m'ont
            guidée vers une étude approfondie des parallèles entre les états
            corporels humains et les mécanismes des arbres. J'explore notamment
            la composition physique, la proprioception et les interactions
            sociales, pour traduire cette quête identitaire en langage corporel.
            Le choix d'un quintette s'est imposé pour embrasser une diversité
            d'histoires, de corps, de physiologies et de sensibilités. J'ai
            cherché à comprendre le mouvement individuel de chacune et ce qu'il
            révèle d'elles. Au plateau, une partition commune émerge, permettant
            à chaque interprète d'exister tout en s'harmonisant avec les autres,
            évoquant l'interdépendance des arbres et leur réseau mycorhizien,
            une métaphore pour la communication et le soutien entre les
            individus.
          </p>
        </div>
      </div>
    </div>
  );
}
