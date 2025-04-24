
const AboutView = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-2xl mb-4">About WiFind</h1>
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg">
          WiFind is a novel search and rescue device that offers faster, more accessible, 
          and more reliable survivor detection in challenging conditions.
        </p>
        
        <div className="space-y-2">
          <h2 className="text-xl">Contact Information</h2>
          <p>
            Website: <a href="https://wifind.tech" target="_blank" rel="noopener noreferrer" 
              className="text-red-400 hover:text-red-300">wifind.tech</a>
          </p>
          <p>
            Email: <a href="mailto:contact@wifind.tech" 
              className="text-red-400 hover:text-red-300">contact@wifind.tech</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
