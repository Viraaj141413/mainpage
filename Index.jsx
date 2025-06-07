function MainComponent() {
  const { useEffect } = React;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  const openFrame = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="PeaksAI - Explore AI tools like PEAKSGPT, PEAKSIMG, PEAKSWRITER, and peaksDETECT"
        />
        <meta name="author" content="PeaksAI" />
        <meta
          name="keywords"
          content="AI, Tools, GPT, Image Generation, Writing, Technology, Innovation"
        />
        <title>PeaksAI</title>
      </head>

      <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#3c3c5e] to-[#24243e] font-poppins">
        {/* Floating shapes background */}
        <div className="floating-shapes"></div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 animate-float">PeaksAI</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fade-in">
              Discover our powerful collection of AI tools designed to enhance
              your digital experience
            </p>
          </div>

          {/* Circular Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            <button
              onClick={() => openFrame("https://peaks0sa.created.app/")}
              className="round-button group"
            >
              <div className="button-content">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  🤖
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">PeaksChat</h3>
                <p className="text-sm opacity-80">AI Conversation Platform</p>
              </div>
            </button>

            <button
              onClick={() => openFrame("https://neuralimgs.created.app/")}
              className="round-button group"
            >
              <div className="button-content">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  🎨
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">PeaksImg</h3>
                <p className="text-sm opacity-80">AI Image Generation</p>
              </div>
            </button>

            <button
              onClick={() => openFrame("https://peakswriterai.created.app")}
              className="round-button group"
            >
              <div className="button-content">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  ✍️
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">PeaksWriter</h3>
                <p className="text-sm opacity-80">Writing Assistant</p>
              </div>
            </button>

            <button
              onClick={() =>
                openFrame("https://ai-text-detector-humanize-455.created.app")
              }
              className="round-button group"
            >
              <div className="button-content">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  🔍
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">PeaksDetect</h3>
                <p className="text-sm opacity-80">Content Analysis</p>
              </div>
            </button>
          </div>

          {/* Ad Container */}
          <div className="max-w-[728px] mx-auto bg-white/10 backdrop-blur-lg rounded-full p-6 shadow-xl">
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6173805010039335"
              crossOrigin="anonymous"
            />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6173805010039335"
              data-ad-slot="6497106102"
              data-ad-format="horizontal"
              data-full-width-responsive="false"
            />
          </div>

          <footer className="text-center mt-16 text-white/60 text-sm">
            © 2025 PeaksAI. All rights reserved.
          </footer>
        </div>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          body {
            margin: 0;
            background-size: 400% 400%;
            animation: bgAnimation 10s ease infinite;
          }

          .floating-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
            opacity: 0.5;
          }

          .floating-shapes::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.2) 100%),
                      repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 8px);
            animation: floatBackground 15s linear infinite;
          }

          .round-button {
            @apply relative w-full aspect-square rounded-full bg-white/10 backdrop-blur-md 
                   hover:bg-white/20 transition-all duration-300 overflow-hidden
                   border border-white/20 hover:border-white/40
                   shadow-lg hover:shadow-2xl hover:-translate-y-2;
          }

          .button-content {
            @apply absolute inset-0 flex flex-col items-center justify-center text-white p-6;
          }

          @keyframes bgAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes floatBackground {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          body {
            @apply overflow-x-hidden;
          }
        `}</style>
      </div>
    </>
  );
}


