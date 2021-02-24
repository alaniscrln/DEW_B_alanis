import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, 
        name: 'Spiderman',
        birthday: "2001-08-10", 
        age: 0, 
        description: "Spider-Man es el alias de Peter Parker, un huérfano criado por su tía May y su tío Ben en la Ciudad de Nueva York después de que sus padres Richard y Mary Parker murieron en un accidente aéreo.", 
        avatar:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/spiderman-poster-design-template-e9971a8ecf28f85ec6fa7f15730dbce5_screen.jpg?ts=1570106518", 
        color: "#cc0000" 
      },
      { id: 12, 
        name: 'Lobezno',
        birthday: undefined, 
        age: 0, 
        description: "Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano.", 
        avatar:"https://www.previewsworld.com/SiteImage/CatalogImage/STL093860?type=", 
        color: "#f9d82c" 
      },
      { id: 13, 
        name: 'Aquaman',
        birthday: "1986-02-23", 
        age: 0, 
        description: "Aquaman era Arthur Curry, el hijo de Tom Curry, un farero, y Atlanna, una marginada de la ciudad perdida de Atlantis. Debido a su herencia, Aquaman descubrió que de joven poseía varias habilidades sobrehumanas, incluyendo el poder de sobrevivir bajo el agua, la comunicación con la vida marina, y sus tremendas habilidades de nado. Finalmente, Arthur decidió utilizar su talento para convertirse en el defensor de los océanos de la Tierra.", 
        avatar:"https://i.pinimg.com/564x/ad/32/b6/ad32b63e4f98a173ae163d49a0ad2357.jpg", 
        color: "#2263c3" 
      },
      { id: 14, 
        name: 'Iron Man',
        birthday: "1970-05-19", 
        age: 0, 
        description: "Tony Stark, un multimillonario magnate empresarial estadounidense, playboy e ingenioso científico, quien sufrió una grave lesión en el pecho durante un secuestro. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva crea, en cambio, una armadura para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Industrias Stark. Él usa el traje y las versiones sucesivas para proteger al mundo como Iron Man.", 
        avatar:"https://images-na.ssl-images-amazon.com/images/I/51cY4Ns9L1L._AC_.jpg", 
        color: "#f9bc06" 
      },
      { id: 15, 
        name: 'Viuda Negra',
        birthday: undefined, 
        age: 0, 
        description: "Viuda Negra es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada 'Piquete de la Viuda'.", 
        avatar:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/02/viuda-negra-poster-1857939.jpg?itok=s5qRGtYF", 
        color: "#333333" 
      }
    ];

    const villains = [
      { id: 11, 
        name: 'Joker',
        birthday: undefined, 
        age: 0, 
        description: "Se trata de uno de los criminales más notables de Gotham City, y es el enemigo principal de Batman. Se le asocia con una personalidad psicópata con un humor sádico y retorcido", 
        avatar:"https://images-na.ssl-images-amazon.com/images/I/61NAc1K7wlL._AC_.jpg", 
        color: "#662e9e" 
      },
      { id: 12, 
        name: 'Calendar Man',
        birthday: undefined, 
        age: 0, 
        description: "El Hombre del Calendario está fascinado por las fechas y calendarios. Sus crímenes siempre tienen una relación con la fecha en la que se hayan cometido. El tema puede estar relacionado con el día de la semana que es o con unas vacaciones o con un aniversario muy especial en esa fecha; él planeará su crimen en torno a ese día.", 
        avatar:"https://i.pinimg.com/originals/d6/78/e5/d678e5c003e44f99e0a68bb32340f2ab.jpg", 
        color: "#cf1717" 
      },
      { id: 13, 
        name: 'EggHead',
        birthday: undefined, 
        age: 0, 
        description: "Elihas Starr nació en Queens, Nueva York. Un talentoso científico atómico de investigación gubernamental con una cabeza en forma de huevo, Starr fue despedido por espionaje y resolvió usar su intelecto como un cerebro criminal",
        avatar:"https://i.pinimg.com/474x/2d/16/a2/2d16a2d05194e3f931e690489d00731c.jpg", 
        color: "#ffe19e" 
      },
      { id: 14, 
        name: 'El matador',
        birthday: undefined, 
        age: 0, 
        description: "Torero de profesión, se caracterizaba por su crueldad contra los animales, lo que provocó que le soltaran con un toro que resultó no estar drogado. Indignado y avergonzado por el bochornoso espectáculo de aquella tarde, decide hacer las maletas y marcharse a Nueva York. ¿Su magnífico plan? Ser un criminal con el poder de robar gracias a sus técnicas de toreo.", 
        avatar:"https://www.tebeosfera.com/T3content/img/T3_personajes/6/4/matador_el_matador_marvel_1964.jpg", 
        color: "#f91f1f" 
      }
    ];
    return {heroes, villains};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
