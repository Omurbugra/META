
const curators = [
  {
    name: "Pelin Yoncacı Arslan",
    email: "pelin@email.com",
    image: "https://images.unsplash.com/photo-1494790108755-2616b12a9926?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Elif Kaymaz", 
    email: "elif@email.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Özlem Ölçer",
    email: "ozlem@email.com", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const assistants = [
  {
    name: "Deniz Ak",
    email: "deniz@email.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Hazal Yüksekkaya",
    email: "hazal@email.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "İlkmen Verda Azkar",
    email: "ilkman@email.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "İlkyaz Sarımehmetoğlu", 
    email: "ilkyaz@email.com",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Nuri Cem Kulaksız",
    email: "cem@email.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Ömür Buğra Gündüz",
    email: "omur@email.com", 
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Şule Çekmegeli",
    email: "sule@email.com",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
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
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Acknowledgments</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                We extend special thanks to the METU JFA Editorial Board for inviting us and for 
                opening the Journal's archives for our exploration.
              </p>
              <p>
                We are extremely grateful to Selen Tuğrul, Fırat Öter, Berfin Güzel, Elif Nur İpek, 
                Fatma İkbal Polat, Öykü Su Sezen, Eda Soyal, and Başak Ünver for their valuable contributions.
              </p>
              <p>
                We also acknowledge the generous financial support provided by Adım ODTÜ, 
                Mimarlar Derneği 1927, Koruma Uzmanları Derneği (KORDER), and METU Faculty of Architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
