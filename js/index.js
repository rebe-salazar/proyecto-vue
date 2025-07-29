   const { createApp, ref, computed, onMounted } = Vue;
    
    createApp({
      setup() {
        const features = ref([
          {
            title: 'Reactive Components',
            description: 'Simple reactivity system with automatic dependency tracking for efficient updates.',
            image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa8ae5d4-198e-486e-97ee-b3b738a3f727.png',
            demoLink: '#reactivity',
            codeLink: '#'
          },
          {
            title: 'Composition API',
            description: 'Better code organization and reuse with logical concerns grouped together.',
            image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c34c4982-558c-4950-a383-04b90f8391f5.png',
            demoLink: '#composition',
            codeLink: '#'
          },
          {
            title: 'Task Management App',
            description: 'Project management application with drag-and-drop interface and team collaboration features.',
            image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbe55a92-1c5d-46ec-b3b8-57018ad48077.png',
            demoLink: '#',
            codeLink: '#'
          },
          {
            title: 'Weather Dashboard',
            description: 'Real-time weather forecast application with 5-day outlook and location detection.',
            image: 'https://placehold.co/600x400',
            demoLink: '#',
            codeLink: '#'
          }
        ]);
                const navLinks = ref([
          { id: 'home', text: 'Home' },
          { id: 'about', text: 'About' },
          { id: 'projects', text: 'Projects' },
          { id: 'contact', text: 'Contact' }
        ]);
        
        const socialLinks = ref([
          { 
            name: 'GitHub', 
            link: 'https://github.com', 
            iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' 
          },
          { 
            name: 'LinkedIn', 
            link: 'https://linkedin.com', 
            iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' 
          },
                    { 
            name: 'Twitter', 
            link: 'https://twitter.com', 
            iconPath: 'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' 
          }
        ]);
        
        const formData = ref({
          name: '',
          email: '',
          message: ''
        });
        
        const activeSection = ref('home');
            const currentYear = computed(() => new Date().getFullYear());
        
        const scrollToSection = (sectionId) => {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
          activeSection.value = sectionId;
        };
        
        const submitForm = () => {
          // In a real app, you would send this data to a server
          console.log('Form submitted:', formData.value);
          alert(`Thanks for your message, ${formData.value.name}! I'll get back to you soon.`);
          formData.value = { name: '', email: '', message: '' };
        };
               const handleScroll = () => {
          const sections = navLinks.value.map(link => link.id);
          const scrollPosition = window.pageYOffset + 100;
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element.offsetTop <= scrollPosition && 
                element.offsetTop + element.offsetHeight > scrollPosition) {
              activeSection.value = section;
              break;
            }
          }
        };
               onMounted(() => {
          window.addEventListener('scroll', handleScroll);
        });
        
        return {
          personalInfo,
          skills,
          projects,
          navLinks,
          socialLinks,
          formData,
          activeSection,
          currentYear,
          scrollToSection,
          submitForm
        };
      }
    }).mount('#app');
    