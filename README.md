# Título del Proyecto

_Proyecto de Bootstrap & Validaciones_

## Comenzando 🚀

_Un pequeño proyecto para aprender a implementar el **bootstrap** y aplicar validaciones en la web_

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Tienes que tener instalado el **Visual Studio Code**_


### Instalación 🔧

_Simplemente descargate o clona el archivo de **github** _

[ProyectoBootstrap](https://github.com/VolodymyrKolomiets/ProjectWhithAdrian)

## Despliegue 📦

_Abre la carpeta ne **Visual Studio Code**._

## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com/) - El framework web usado
* [Bootstrap](https://getbootstrap.com/) - Libreria usada

## Autores ✒️ 


* **Volodymyr Kolomiiets** - *Trabajo Inicial* - [VolodymyrKolomiets](https://github.com/VolodymyrKolomiets)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)


## Licencia 📄

**No license required**



##  Questions 📢

**¿Qué es Bootstrap?¿Para qué sirve?**

_Bootstrap es una serie de herramientas CSS utilizadas en 
aplicaciones front-end - es decir, en la pantalla de 
interfaz con el usuario- 
para desarrollar aplicaciones que se adaptan a 
cualquier dispositivo. Son componentes de cuadrícula 
prediseñados y utiles en proyectos, con potentes 
complementos de JavaScript._

**¿Por qué usar Bootstrap?**

_Para aguilizar el proceso de creacion del front-end de tu paguina web._

**Características de Bootstrap**

_Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales._

**Ventajas y desventajas de usar bootstrap**

_**Ventajas:** ya tienes componentes prediseñados para implementar en tus proyectos en front-end de paginas mas generales y que no necesitan mucho diceño web. **Desventajas:**no sirve muy bien para proyectos muy castomizados o mas concretos para un cliente con un diseño web especifico._ 

**Como instalar o implementar bootstrap en mi proyecto**

_Hay varias maneras de instala el bootstrap. La manera mas facil es acceder al citi web oficial ir a docs/descargas y descargar el primer archivo. Para implementar el bootsrap en tu proyecto solo debes de agregar las carpetas a tu proyecto y enlazar las fuentes de Css en <head> y Js en la ultima linea del <body>_


**¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar como funciona y poner un ejemplo**
_Si! Utiliza una potente cuadrícula flexbox móvil para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, cinco niveles de respuesta predeterminados, variables y mezclas de Sass y docenas de clases predefinidas. Y son configurables segun necesidad_

Ejemplo:
```
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```
**¿Que es un componente de bootstrap?Pon un ejemplo**
 
 _Son componentes ya creados por la propia biblioteca que tiene bootstrap. los mas comunes son: Carousel; Navs; Navbar; Jumbotron; Breadcrumbs; Pagination; Tooltips; Formularios; Cards;_ 

**¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos**
 _Hay dos diseños principales para Bootstrap que son Diseño fluido y Diseño fijo._ 

_**Diseño fluido :** utiliza la clase bootstrap .container-fluid para el diseño. Este diseño utiliza valores proporcionales, como unidades de medida para un bloque de contenido, imágenes o cualquier otro elemento. Se utiliza para crear un elemento que sea 100 % más ancho y cubra todos los anchos de la pantalla. El diseño fluido cambia de tamaño continuamente a medida que cambia el ancho de su navegador en cualquier cantidad, sin dejar espacio vacío adicional en los lados. Por lo tanto, se llama «diseño fluido». **Diseño fijo :** utiliza la clase bootstrap .container para el diseño. El diseño fijo tiene valores de ancho de píxel específicos que cambian su valor de ancho con la ayuda de consultas de medios. Proporciona un contenedor receptivo de ancho fijo. El diseño fijo cambia de tamaño en fragmentos en varios anchos determinados a medida que se especifican los valores de píxeles._

**¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.**

_Bootstrap dispone de cuatro tamaños para los botones: Grande (Larger), mediano (Medium), pequeño (Small) y muy pequeño (XSmall)_

**¿Que es un Carousel de bootstrap? Pon un ejemplo**

_Carousel es un componente de JavaScript en Bootstrap que le permite agregar un control deslizante en su sitio. Esto funciona en base a la transformación CSS 3D y le permite agregar diferentes variaciones de presentaciones de diapositivas._

*Conceptos básicos del componente de carrusel Bootstrap 5*

1. El carrusel Bootstrap 5 utiliza CSS 3D transform y JavaScript para crear presentaciones de diapositivas. Por lo tanto, debe incluir los archivos jQuery y bootstrap.min.js en su plantilla HTML para usar el componente carrusel.

2. De forma predeterminada, las diapositivas girarán de derecha a izquierda y la rotación se detendrá al pasar el mouse.

3. Las diapositivas del carrusel no girarán cuando el carrusel no esté visible en el navegador. Esto funciona en todos los navegadores modernos que utilizan la API de visibilidad de la página.

4. El tamaño de las diapositivas debe definirse explícitamente.

5. Utilice la clase "img-fluid" para asegurarse de que el carrusel responda en todos los dispositivos.

**¿Que es un spinner de bootstrap? Pon un ejemplo**

_Los "spinners" de Bootstrap se pueden usar para mostrar el estado de carga en sus proyectos. Están construidos solo con HTML y CSS, lo que significa que no necesita JavaScript para crearlos. Sin embargo, necesitará un JavaScript personalizado para alternar su visibilidad. Su apariencia, alineación y tamaño se pueden personalizar fácilmente con nuestras increíbles clases de utilidad._

```
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```
**¿Que es un navBar de bootstrap? Pon un ejemplo**

_Barra de navegación : en Bootstrap nos facilita la creación de la barra principal de navegación de nuestra web mediante la clase.navbar. Esta barra se adaptará al tamaño de pantalla, mostrando los elementos colapsados en un botón en pantallas pequeñas y de forma normal para pantallas más grandes._

**¿Que es un modal de bootstrap? Pon un ejemplo**

_Bootstrap Modal es básicamente una ventana emergente que se muestra al hacer clic en un elemento como un botón o un enlace de texto. Utiliza JavaScript para mostrar el contenido al hacer clic con efecto de caja de luz. La ventana emergente modal se puede cerrar haciendo clic en el botón de cierre o haciendo clic fuera de la ventana modal._

**Existen inputs para subir archivos en Bootstrap? Pon un ejemplo**

 _Basicamente son los <inputs> ya generados por el propio bootstrap con las propiedades de la misma biblioteca de bootstrap._

**¿Qué es un plugin scrollspy en Bootstrap?Pon un ejemplo**

_Scrollspy alterna la clase en elementos de anclaje () cuando el elemento con el referenciado por el anclaje se desplaza a la vista. Scrollspy se usa mejor junto con un componente de navegación de Bootstrap o un grupo de listas, pero también funcionará con cualquier elemento de anclaje en la página actual. Así es como funciona..active<a>idhref_

1. Para empezar, scrollspy requiere dos cosas: una navegación, un grupo de listas o un simple conjunto de enlaces, además de un contenedor desplazable. El contenedor desplazable puede ser el o un elemento personalizado con un conjunto y .<body>heightoverflow-y: scroll

2. En el contenedor desplazable, agregue y donde es el único de la navegación asociada. Asegúrese de incluir también un para garantizar el acceso al teclado.data-bs-spy="scroll"data-bs-target="#navId"navIdidtabindex="0"

3. A medida que se desplaza por el contenedor "espiado", se agrega una clase y se elimina de los vínculos de anclaje dentro de la navegación asociada. Los enlaces deben tener objetivos resolubles, de lo contrario se ignoran. Por ejemplo, un debe corresponder a algo en el DOM como .activeid<a href="#home">home</a><div id="home"></div>

4. Los elementos de destino que no sean visibles se ignorarán. Consulte la sección Elementos no visibles a continuación

*Extra
Implementa nuevos puntos sobre bootstrap que hayas descubierto durante tu investigación y creas que son importantes
