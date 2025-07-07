
const curators = [
  {
    name: "Elif Kaymaz",
    email: "pelin@email.com",
    image: "/META/Teamimages/elif.jpg"
  },
  {
    name: "Pelin Yoncacı Arslan",
    email: "pyoncaci@metu.edu.tr",
    image: "/META/Teamimages/pelin.png"
  },
  {
    name: "Özlem Ölçer",
    email: "oolcer@proton.me",
    image: "/META/Teamimages/ozlem.jpg"
  }
];

const assistants = [
  {
    name: "Deniz Ak",
    email: "ak.deniz@metu.edu.tr",
    image: "/META/Teamimages/deniz2.jpg"
  },
  {
    name: "Hazal Yüksekkaya",
    email: "hazal@email.com",
    image: "/META/Teamimages/Hazal.png"
  },
  {
    name: "İlkmen Verda Azkar",
    email: "verda.azkar@metu.edu.tr",
    image: "/META/Teamimages/verda.jpg"
  },
  {
    name: "İlkyaz Sarımehmetoğlu", 
    email: "ilkyazsmo@gmail.com",
    image: "/META/Teamimages/ilkyaz.png"
  },
  {
    name: "Nuri Cem Kulaksız",
    email: "nuricem.kulaksiz@outlook.com",
    image: "/META/Teamimages/nuri.jpg"
  },
  {
    name: "Ömür Buğra Gündüz",
    email: "bugra.gunduz@metu.edu.tr",
    image: "/META/Teamimages/omur.png"
  },
  {
    name: "Şule Çekmegeli",
    email: "sulecekmegeli@gmail.com",
    image: "/META/Teamimages/sule.jpg"
  },
  {
    name: "Ufuk Tanyeri",
    email: "ufuk@email.com",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const PersonCard = ({ person, index }: { person: typeof curators[0], index: number }) => (
  <div 
    className="text-center group animate-fade-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative mb-6">
      <img
        src={person.image}
        alt={person.name}
        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
      />
    </div>
    <h3 className="text-lg font-semibold mb-2">{person.name}</h3>
    <a 
      href={`mailto:${person.email}`}
      className="text-gray-600 hover:text-black transition-colors text-sm"
    >
      {person.email}
    </a>
  </div>
);

const Team = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Exhibition Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the curators and assistants who brought this exhibition to life
          </p>
        </div>

        {/* Curators Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Curators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {curators.map((curator, index) => (
              <PersonCard key={curator.email} person={curator} index={index} />
            ))}
          </div>
        </div>

        {/* Curatorial Assistants Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Curatorial Assistants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {assistants.map((assistant, index) => (
              <PersonCard key={assistant.email} person={assistant} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="text-center animate-fade-up mt-12 px-6">
          <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Acknowledgments</h3>
          <div className="max-w-7xl mx-auto text-sm text-gray-600 dark:text-gray-400 font-light space-y-3 leading-normal">
            <p>
              We extend special thanks to the METU JFA Editorial Board for inviting us and for
              opening the Journal's archives for our exploration.
            </p>
            <p>
              We are extremely grateful to Selen Tuğrul, Fırat Öter, Berfin Güzel, Elif Nur İpek,
              Fatma İkbal Polat, Öykü Su Sezen, Eda Soyal, and Başak Ünver for their valuable contributions.
            </p>
            <p>
              We also acknowledge the generous financial support provided by Adım ODTÜ, Mimarlar Derneği 1927,
              Koruma Uzmanları Derneği (KORDER), and METU Faculty of Architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
