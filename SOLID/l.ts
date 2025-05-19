class Document_ {
  data: string = "";
  filename: string = "";

  constructor() {}

  open(): void {
    // Lógica para abrir el documento
  }
}

class WritableDocument_ extends Document_ {
  save(): void {
    // Lógica para guardar el documento
  }
}

class Project {
  writableDocs: WritableDocument_[] = [];
  documents: Document_[] = [];

  saveAll(): void {
    for (const doc of this.writableDocs) {
      doc.save();
    }
  }

}

interface Figura{
    getArea(): number;
}


class Cuadrado implements Cuadrado {
    lado: number;


    constructor(lado:number) {       
        this.lado = lado;
    }

    getArea(){
        return this.lado * this.lado;
    }
}

class Rectangulo implements Figura{
    lado: number;
    ancho: number;

    constructor(lado: number, ancho: number) {
        this.lado = lado;
        this.ancho =  ancho;
        
    }

    getArea() {
       return this.lado * this.lado; 
    }
}

const rectangulo = new Rectangulo(2,4);

function area(figura:Cuadrado) {
    return figura.getArea();
}

area(rectangulo);