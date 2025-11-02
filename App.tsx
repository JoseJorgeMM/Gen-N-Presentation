import React from 'react';
import { Slide } from './components/Slide';
import { SlideData } from './types';

const slides: SlideData[] = [
  {
    type: 'title',
    title: 'AI-LAB Jesús Rey',
    subtitle: 'Innovación desde el Aula',
    creator: {
      name: 'Jose Jorge Muñoz',
      role: 'Profesor de Media Técnica en Desarrollo de Software',
      imageUrl: '/me.png',
    },
    backgroundImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'content',
    title: '¿Cómo Nació la Idea?',
    content: [
      {
        icon: 'idea',
        title: 'La Oportunidad',
        text: 'Surgió al ver la popularidad de la IA Generativa y la poca preparación de los estudiantes para usarla con responsabilidad y criterio.',
      },
      {
        icon: 'lab',
        title: 'La Necesidad',
        text: 'En el día a día del colegio, existen muchas tareas administrativas y pedagógicas que se pueden mejorar y agilizar con tecnología.',
      },
      {
        icon: 'lightbulb',
        title: 'La Solución',
        text: 'Crear un espacio donde los estudiantes no solo aprendan sobre IA, sino que la apliquen para construir soluciones a nuestras propias necesidades.',
      },
    ],
    backgroundImageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1920&auto=format&fit=crop&ixlib.rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'content',
    title: 'Nuestro Proceso: Más que Solo Programar',
    content: [
      {
        icon: 'code',
        title: 'En el Aula',
        text: 'Funcionamos con aprendizaje basado en proyectos. Nos reunimos una vez por semana, y mi rol es ser un guía, ayudando a integrar modelos como Gemini y temas de machine learning.',
      },
      {
        icon: 'community',
        title: 'Más Allá del Aula',
        text: 'Conecto a los estudiantes con el ecosistema de la ciudad, llevándolos a eventos para que conozcan otros proyectos, se inspiren y vean que lo que aprenden tiene un valor real.',
      },
    ],
    backgroundImageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1920&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'list',
    title: 'Nuestros Proyectos: Soluciones Reales',
    mainContent: 'Nuestro proyecto principal es "ICFriend", una plataforma web gamificada, tipo Duolino, para que los estudiantes se preparen para las pruebas ICFES. La app hace un diagnóstico inicial y luego la IA genera contenido personalizado para cada estudiante, con medallas y recompensas para mantener la motivación.',
    mainContentLink: 'https://icfriend.lovable.app/',
    listItems: [
        'Un generador automático de actas administrativas para reducir el tiempo en papeleo.',
        'Un modelo para la predicción de deserción, que nos ayuda a identificar y apoyar a tiempo a los estudiantes en riesgo.',
        'Un generador de agendas y novedades escolares para mejorar la comunicación con la comunidad educativa.'
    ],
    backgroundImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop&ixlib.rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'content',
    title: 'Resultados y Visión a Futuro',
    content: [
      {
        icon: 'chart',
        title: 'Resultados Positivos',
        text: 'Lanzamos la prueba de ICFriend con estudiantes de grado 11 y la respuesta fue muy positiva. Comentaron que les ayudó a entender mejor los temas y que el formato de juego los motivó a estudiar.',
      },
      {
        icon: 'rocket',
        title: 'Próximos Pasos',
        text: 'El plan para el próximo año es implementar ICFriend en todos los colegios públicos posibles.',
      },
      {
        icon: 'globe',
        title: 'Visión a Largo Plazo',
        text: 'Esperamos desarrollar proyectos para la comunidad en temas de movilidad, servicio a la ciudadanía y medio ambiente. Estoy seguro que el talento de los muchachos logrará avances significativos.',
      },
    ],
    backgroundImageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop&ixlib.rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white w-full">
      {slides.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </main>
  );
};

export default App;