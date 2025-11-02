import React from 'react';
import { SlideData, IconType } from '../types';

interface SlideProps {
  data: SlideData;
}

// Icon Components
const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const LightbulbIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-4.5c0-1.356-1.1-2.46-2.46-2.46a2.46 2.46 0 0 0-2.46 2.46 6.01 6.01 0 0 0 1.5 4.5m3.46.25a2.46 2.46 0 0 1-4.92 0" />
    </svg>
);
const CodeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" />
    </svg>
);
const CommunityIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.289 2.72a9.09 9.09 0 0 1-3.741-.479 3 3 0 0 1 4.682-2.72M12 12.75a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z" />
    </svg>
);
const RocketIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 1 6 6h-4.82m-1.16-7.38a6 6 0 0 0-7.38 5.84h4.82m2.56-5.84a6 6 0 0 0-6-6v4.82a6 6 0 0 0 7.38-5.84Z" />
    </svg>
);
const ChartIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-12a2.25 2.25 0 0 1-2.25-2.25V3.75m0-1.5v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5" />
    </svg>
);
const GlobeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 0 1 9 9h-9" />
    </svg>
);

const ExternalLinkIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 10.5Z" />
    </svg>
);

const getIcon = (icon: IconType, className: string) => {
    switch (icon) {
        case 'lightbulb': return <LightbulbIcon className={className} />;
        case 'idea': return <LightbulbIcon className={className} />;
        case 'lab': return <CodeIcon className={className} />;
        case 'code': return <CodeIcon className={className} />;
        case 'community': return <CommunityIcon className={className} />;
        case 'rocket': return <RocketIcon className={className} />;
        case 'chart': return <ChartIcon className={className} />;
        case 'globe': return <GlobeIcon className={className} />;
        default: return null;
    }
}


const renderContent = (data: SlideData) => {
    switch (data.type) {
        case 'title':
            return (
                <>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight drop-shadow-xl">
                        {data.title}
                    </h1>
                    <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 drop-shadow-md">
                        {data.subtitle}
                    </h2>
                    <div className="mt-12 bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg max-w-md mx-auto">
                        <p className="text-2xl font-semibold text-white tracking-wide">{data.creator.name}</p>
                        <p className="mt-2 text-md text-cyan-300">{data.creator.role}</p>
                    </div>
                </>
            );
        case 'content':
             return (
                <>
                    <h2 className="text-4xl md:text-6xl font-bold text-white border-b-4 border-cyan-400 pb-4 inline-block drop-shadow-lg [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
                        {data.title}
                    </h2>
                    <div className={`grid grid-cols-1 ${data.content.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} ${data.content.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 max-w-7xl w-full`}>
                        {data.content.map((item, index) => (
                           <div key={index} className="bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-cyan-400 group flex flex-col items-center">
                               <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                   {getIcon(item.icon, "h-12 w-12")}
                               </div>
                               <h3 className="text-xl font-bold text-center mb-3 text-white">{item.title}</h3>
                               <p className="text-md font-light leading-relaxed text-gray-300 text-center flex-grow">
                                   {item.text}
                               </p>
                           </div>
                        ))}
                    </div>
                </>
            );
        case 'list':
            return (
                 <>
                    <h2 className="text-4xl md:text-6xl font-bold text-white border-b-4 border-cyan-400 pb-4 inline-block drop-shadow-lg [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
                        {data.title}
                    </h2>
                    <div className="max-w-6xl w-full flex flex-col items-center gap-10">
                        <div className="w-full bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-lg p-8 rounded-2xl border-2 border-cyan-400/50 shadow-2xl text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Proyecto Principal: "ICFriend"</h3>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
                                {data.mainContent}
                            </p>
                             {data.mainContentLink && (
                                <a 
                                    href={data.mainContentLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                                >
                                    Ver aplicación
                                    <ExternalLinkIcon className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.listItems.map((item, index) => (
                                <div key={index} className="flex items-center bg-gray-900/60 p-5 rounded-lg border border-gray-700/50 transition-colors hover:border-cyan-500/80">
                                    <CheckCircleIcon className="h-8 w-8 text-cyan-400 mr-4 flex-shrink-0" />
                                    <span className="text-md md:text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )
    }
}


export const Slide: React.FC<SlideProps> = ({ data }) => {
  return (
    <section 
        className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center py-20 lg:py-24 border-b-2 border-gray-800"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
    >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="relative z-10 p-6 sm:p-10 text-center flex flex-col items-center justify-center w-full max-w-7xl mx-auto gap-12">
            {renderContent(data)}
        </div>
    </section>
  );
};