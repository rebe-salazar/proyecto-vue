<template>
  <header>
    <link rel="stylesheet" href="./css/index.css">
    <nav class="container">
      <div class="logo">Vue.js</div>
      <div class="nav-links">
        <a href="#historia">Historia</a>
        <a href="#caracteristicas">Características</a>
        <a href="#ventajas">Ventajas</a>
        <a href="#consideraciones">Consideraciones</a>
      </div>
    </nav>
  </header>
  <section id="historia">
    <h2>Vue<span>.js</span></h2>
    <img src="/img/vue-logo.png" alt="Vue.js logo" />
    <div>
            <p>Vue.js fue creado por Evan You, un desarrollador que anteriormente trabajó en Google en proyectos como
              Angular. En 2014, Evan decidió construir una herramienta que combinara lo mejor de Angular, pero que fuera
              más sencilla y flexible.
              <br>Es muy popular en crear aplicaciones web de una sola página, conocidas como SPAs, y también en
              construir sistemas administrativos y paneles de control. Además, se integra fácilmente en proyectos que
              usan un backend tradicional, como Laravel o Django.
              <br> Es genial para hacer prototipos rápidos de interfaces y para desarrollar aplicaciones progresivas,
              conocidas como PWA. Lo mejor de Vue es que es muy versátil: puedes usarlo en proyectos pequeños o en
              arquitecturas empresariales más complejas. También es una opción excelente para estudiantes o para quienes
              están empezando, ya que no requiere configuraciones complicadas para comenzar a usarlo. Esa fue una de las
              razones por las que lo elegí para este proyecto.

            </p>
            <div class="skills">
              <span class="skill">2014</span>
              <span class="skill">SPAs</span>
              <span class="skill">Evan You</span>
              <span class="skill">Laravel</span>
            </div>
          </div>
  </section>
  <section id="caracteristicas">
    <h2><span>Principales</span> Características</h2>
    <p><span>Ventajas:</span><br>
•	Curva de aprendizaje baja.<br>
•	Comunidad activa y en crecimiento.<br>
•	Documentación extensa y clara.<br>
•	Fácil de integrar en proyectos existentes.<br>
•	Sintaxis intuitiva y basada en HTML.<br>
<span>Desventajas:</span><br>
•	Ecosistema más joven, aunque en constante maduración.<br>
•	Menor respaldo empresarial que Angular (Google) o React (Meta).<br>
•	Algunas decisiones arquitectónicas son abiertas, lo que puede causar inconsistencias en grandes equipos.<br>
</p>
  </section>
  <section id="contacto">
    <h2>Contáctenos</h2>
    <form @submit.prevent="enviarFormulario">
      <input type="text" v-model="nombre" placeholder="Nombre" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <textarea v-model="mensaje" placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar mensaje</button>
    </form>
  </section>
</template>



<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')

const enviarFormulario = () => {
  alert(`Gracias, ${nombre.value}. Tu mensaje ha sido enviado.`)
  nombre.value = ''
  email.value = ''
  mensaje.value = ''
}
</script>

