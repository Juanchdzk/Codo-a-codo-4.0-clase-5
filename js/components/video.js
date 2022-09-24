export default class Video{
    constructor(width, height, css_class, fuente){
        this.width = width;
        this.height = height;
        this.css_class = css_class;
        this.fuente = fuente;
    }

    render(){
        let miHTML = `<section class='recuadro'>
        <h3>Vídeo genial agregado</h3>
        <video width=${this.width} height=${this.height} class=${this.css_class} controls>
        <source src="${this.fuente}">
        </video>
        </section>`;

        return miHTML;
    }
}
