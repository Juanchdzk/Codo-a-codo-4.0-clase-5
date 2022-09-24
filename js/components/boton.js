export default class Button{
    constructor(texto, css_class){
        this.text = texto;
        this.css_class = css_class;
    }

    render(){
        let miHTML = `<section class='recuadro'>
        <h3>Un boton que no cumple ninguna función</h3>
        <button class=${this.css_class}>${this.text}</button>
        </section>`;

        return miHTML;
    }
}